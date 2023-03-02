import React, { useState } from "react";
import classNames from "./skills.module.css";
import { skills } from "../../data/utils";
import Plot from "react-plotly.js";
import { getColor } from "../../utils/colors";
import { useWindowDimensions } from "../../hooks/window-hooks";

export const SkillsPlot = props => {
  const [highlightedSkillName, setHighlightedSkillName] = useState("");
  const { width } = useWindowDimensions();
  const isNarrowWidth = width <= 480;
  const { skillType = "Language", showTitle = true } = props;
  const subSkills = skills.getSkillData(skillType, {
    minimumYearToInclude: 2010,
  });
  const subSkillNames = Object.keys(subSkills);
  const data = subSkillNames.map((name, index) => {
    const subSkill = subSkills[name];
    const { scoreWeight = 1.0, isCurrentSkill } = subSkill;
    const subSkillExperience = subSkill.experience;
    const xValues = Object.keys(subSkillExperience);
    const yValues = Object.values(subSkillExperience).map((value, index) => {
      const distanceToCurrent = xValues.length - index;
      const currentMultiplier = 1 + 16 / (distanceToCurrent + 6);
      const multiplier = scoreWeight * (isCurrentSkill ? currentMultiplier : 1);
      return value * multiplier;
    });
    return {
      // Word wrap name at 20 characters
      name: name,
      x: xValues,
      y: yValues,
      type: "bar",
      hoverinfo: "name",
      marker: {
        color:
          !highlightedSkillName || highlightedSkillName === name
            ? getColor(index)
            : "gray",
      },
    };
  });

  const highlightSkillName = ({ points }) => {
    const [point] = points || [];
    const { data = {} } = point || {};
    setHighlightedSkillName(data.name);
  };

  const onLegendClick = ({ curveNumber }) => {
    const datum = data[curveNumber];
    if (datum) {
      const { name } = datum;
      // FIXME (jsingh): highlightedSkillName doesn't seem to change.
      if (highlightedSkillName === name) {
        setHighlightedSkillName("");
      } else {
        setHighlightedSkillName(name);
      }
    } else {
      setHighlightedSkillName("");
    }
    return false;
  };

  return (
    <Plot
      data={data}
      useResizeHandler={true}
      className={classNames.plot}
      layout={{
        title: showTitle ? skillType : undefined,
        autosize: true,
        xaxis: {
          title: "Year",
        },
        yaxis: {
          title: "Relative Skill Level",
          showticklabels: false,
        },
        barmode: "stack",
        hovermode: "closest",
        showlegend: !isNarrowWidth,
      }}
      onHover={highlightSkillName}
      onUnhover={() => setHighlightedSkillName("")}
      onClick={highlightSkillName}
      onLegendClick={onLegendClick}
      onLegendDoubleClick={() => false}
    />
  );
};

export default props => <SkillsPlot {...props}></SkillsPlot>;
