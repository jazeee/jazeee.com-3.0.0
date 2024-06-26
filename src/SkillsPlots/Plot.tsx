import { Data } from 'plotly.js';
import { useState } from 'react';
import Plot from 'react-plotly.js';

import { DARKEST_BLUE } from 'src/components/Theme/MuiThemeProvider';
import { usePaletteModeContext } from 'src/components/Theme/paletteModeContext';

import { useWindowDimensions } from '../hooks/useWindowDimensions';
import { getSkillData, START_YEAR } from '../SkillsData/utils';
import { getMarkerProps } from '../utils/colors';

const COLORS_BY_MODE = {
  light: {
    paperBackgroundColor: '#e8e8e8',
    fontColor: '#222',
    gridColor: '#c8c8c8',
    nonHighlightedPlotColor: 'lightgray',
  },
  dark: {
    paperBackgroundColor: DARKEST_BLUE,
    fontColor: '#ddd',
    gridColor: '#222222c0',
    nonHighlightedPlotColor: '#666',
  },
};
export interface ISkillsPlotProps {
  skillType: string;
  titleIsVisible?: boolean;
}

export function SkillsPlot(props: ISkillsPlotProps) {
  const { skillType = 'Language', titleIsVisible = true } = props;
  const { paletteMode } = usePaletteModeContext();
  const PLOT_COLORS = COLORS_BY_MODE[paletteMode];
  const [highlightedSkillName, setHighlightedSkillName] = useState('');
  const { width } = useWindowDimensions();
  const screenIsWide = width >= 600;
  const subSkills = getSkillData(skillType, {
    minimumYearToInclude: 2000,
  });

  const subSkillNames = Object.keys(subSkills);
  const data: Data[] = subSkillNames.map((name, index) => {
    const subSkill = subSkills[name];
    const { experience } = subSkill;
    const subSkillExperience: Record<number, number> = experience;
    const xValues = Object.keys(subSkillExperience).map(Number);
    const yValues = Object.values(subSkillExperience).map((value) => {
      return value;
    });
    const markerProps = getMarkerProps(index, screenIsWide);
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
        color: thisPlotIsActive ? markerProps.color : PLOT_COLORS.nonHighlightedPlotColor,
        opacity: thisPlotIsActive ? 1 : 0.25,
      },
      line: { shape: 'spline', smoothing: 0.6 },
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
        height: screenIsWide ? '480px' : '320px',
      }}
      layout={{
        title: titleIsVisible ? skillType : undefined,
        titlefont: {
          size: screenIsWide ? 24 : 16,
        },
        plot_bgcolor: 'transparent',
        margin: {
          l: 48,
          r: screenIsWide ? 48 : 0,
          t: 48,
          b: 48,
        },
        paper_bgcolor: PLOT_COLORS.paperBackgroundColor,
        font: {
          color: PLOT_COLORS.fontColor,
        },
        autosize: true,
        xaxis: {
          title: 'Year',
          range: [START_YEAR - 0.1, new Date().getFullYear() + 0.1],
          gridcolor: PLOT_COLORS.gridColor,
        },
        yaxis: {
          title: 'Skill Level (relative)',
          range: [-5, 105],
          gridcolor: PLOT_COLORS.gridColor,
          gridwidth: 2,
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
      config={{
        displayModeBar: false,
        scrollZoom: false,
      }}
    />
  );
}

SkillsPlot.defaultProps = {
  titleIsVisible: true,
};

export default SkillsPlot;
