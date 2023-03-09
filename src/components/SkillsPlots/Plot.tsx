import React, { useState } from "react";
import { skills, START_YEAR } from "../../data/utils";
import Plot from "react-plotly.js";
import { getMarkerProps } from "../../utils/colors";
import { useWindowDimensions } from "../../hooks/window-hooks";
import { Data } from "plotly.js";

export interface ISkillsPlotProps {
  skillType: string;
  showTitle?: boolean;
}

export function SkillsPlot(props: ISkillsPlotProps) {
  const [highlightedSkillName, setHighlightedSkillName] = useState("");
  const { width } = useWindowDimensions();
  const screenIsWide = width >= 480;
  const { skillType = "Language", showTitle = true } = props;
  const subSkills = skills.getSkillData(skillType, {
    minimumYearToInclude: 2000,
  });
  const subSkillNames = Object.keys(subSkills);
  const data: Data[] = subSkillNames.map((name, index) => {
    const subSkill = subSkills[name];
    const { scoreWeight = 1.0, isCurrentSkill } = subSkill;
    const subSkillExperience = subSkill.experience;
    const xValues = Object.keys(subSkillExperience).map(Number);
    const yValues = Object.values(subSkillExperience).map((value, index) => {
      const distanceToCurrent = xValues.length - index;
      const currentMultiplier = 1 + 16 / (distanceToCurrent + 6);
      const multiplier = scoreWeight * (isCurrentSkill ? currentMultiplier : 1);
      return value * multiplier;
    });
    const markerProps = getMarkerProps(index);
    const anyPlotIsHighlighted = Boolean(highlightedSkillName);
    const plotIsHighlighted = highlightedSkillName === name;
    const thisPlotIsActive = !anyPlotIsHighlighted || plotIsHighlighted;
    const datum: Data = {
      // Word wrap name at 20 characters
      name: name,
      x: xValues,
      y: yValues,
      type: "scatter",
      mode: 'lines+markers',
      hoverinfo: "name",
      marker: {
        ...markerProps,
        color:
          thisPlotIsActive
            ? markerProps.color
            : "lightgray",
        opacity: thisPlotIsActive ? 1 : 0.25,
      },
      'line': { 'shape': 'spline', 'smoothing': 1 },
    };
    return datum;
  });

  const highlightSkillName = (event: Readonly<Plotly.PlotMouseEvent> | Readonly<Plotly.PlotHoverEvent>) => {
    const { points } = event;
    const [point] = points || [];
    const { data = { name: '' } } = point || {};
    setHighlightedSkillName(data.name);
  };

  return (
    <Plot
      data={data}
      useResizeHandler={true}
      style={{
        width: '100%',
        height: '500px',
      }}
      layout={{
        title: showTitle ? skillType : undefined,
        autosize: true,
        xaxis: {
          title: "Year",
          range: [START_YEAR - 0.1, new Date().getFullYear() + 0.1]
        },
        yaxis: {
          title: "Relative Skill Level",
          showticklabels: false,
        },
        hovermode: "closest",
        showlegend: screenIsWide,
      }}
      onHover={highlightSkillName}
      onUnhover={() => setHighlightedSkillName("")}
      onClick={highlightSkillName}
      onLegendClick={({ curveNumber }) => {
        const datum = data[curveNumber];
        const { name } = datum;
        if (name) {
          if (highlightedSkillName === name) {
            setHighlightedSkillName("");
          } else {
            setHighlightedSkillName(name);
          }
        } else {
          setHighlightedSkillName("");
        }
        return false;
      }}
      onLegendDoubleClick={() => false}
    />
  );
};

export default SkillsPlot;
