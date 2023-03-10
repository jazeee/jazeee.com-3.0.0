import { Data } from 'plotly.js';
import React, { useState } from 'react';
import Plot from 'react-plotly.js';

import { getSkillData, START_YEAR } from '../../data/utils';
import { useWindowDimensions } from '../../hooks/useWindowDimensions';
import { getMarkerProps } from '../../utils/colors';

export interface ISkillsPlotProps {
  skillType: string;
  titleIsVisible?: boolean;
}

export function SkillsPlot(props: ISkillsPlotProps) {
  const [highlightedSkillName, setHighlightedSkillName] = useState('');
  const { width } = useWindowDimensions();
  const screenIsWide = width >= 480;
  const { skillType = 'Language', titleIsVisible = true } = props;
  const subSkills = getSkillData(skillType, {
    minimumYearToInclude: 2000,
  });
  const subSkillNames = Object.keys(subSkills);
  const data: Data[] = subSkillNames.map((name, index) => {
    const subSkill = subSkills[name];
    const { scoreWeight = 1.0, isCurrentSkill } = subSkill;
    const subSkillExperience: Record<number, number> = subSkill.experience;
    const xValues = Object.keys(subSkillExperience).map(Number);
    const yValues = Object.values(subSkillExperience).map((value, subSkillIndex) => {
      const distanceToCurrent = xValues.length - subSkillIndex;
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
      name,
      x: xValues,
      y: yValues,
      type: 'scatter',
      mode: 'lines+markers',
      hoverinfo: 'name',
      marker: {
        ...markerProps,
        color: thisPlotIsActive ? markerProps.color : 'lightgray',
        opacity: thisPlotIsActive ? 1 : 0.25,
      },
      line: { shape: 'spline', smoothing: 1 },
    };
    return datum;
  });

  const highlightSkillName = (
    event: Readonly<Plotly.PlotMouseEvent> | Readonly<Plotly.PlotHoverEvent>
  ) => {
    const { points } = event;
    setHighlightedSkillName(points?.[0]?.data?.name ?? '');
  };

  return (
    <Plot
      data={data}
      useResizeHandler
      style={{
        width: '100%',
        height: '500px',
      }}
      layout={{
        title: titleIsVisible ? skillType : undefined,
        autosize: true,
        xaxis: {
          title: 'Year',
          range: [START_YEAR - 0.1, new Date().getFullYear() + 0.1],
        },
        yaxis: {
          title: 'Relative Skill Level',
          showticklabels: false,
        },
        hovermode: 'closest',
        showlegend: screenIsWide,
      }}
      onHover={highlightSkillName}
      onUnhover={() => setHighlightedSkillName('')}
      onClick={highlightSkillName}
      onLegendClick={({ curveNumber }) => {
        const datum = data[curveNumber];
        const { name } = datum;
        if (name) {
          if (highlightedSkillName === name) {
            setHighlightedSkillName('');
          } else {
            setHighlightedSkillName(name);
          }
        } else {
          setHighlightedSkillName('');
        }
        return false;
      }}
      onLegendDoubleClick={() => false}
    />
  );
}

SkillsPlot.defaultProps = {
  titleIsVisible: true,
};

export default SkillsPlot;