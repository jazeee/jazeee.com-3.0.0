import { MarkerSymbol, PlotMarker } from 'plotly.js';

const HSL_COLORS: string[] = [];
const COLOR_STEP_RANGE = 8;
for (let i = 0; i < COLOR_STEP_RANGE; i += 1) {
  HSL_COLORS.push(`hsl(${(0 + (i * 360) / COLOR_STEP_RANGE) % 360}, 100%, 55%)`);
  HSL_COLORS.push(`hsl(${(240 + (i * 360) / COLOR_STEP_RANGE) % 360}, 85%, 45%)`);
  HSL_COLORS.push(`hsl(${(120 + (i * 360) / COLOR_STEP_RANGE) % 360}, 65%, 30%)`);
}

export const COLORS: string[] = [...HSL_COLORS];

// https://chart-studio.plotly.com/~etpinard/435.embed
const MARKER_STYLE_OPTIONS: MarkerSymbol[] = [
  'circle',
  'star-diamond',
  'star-square',
  'x',
  'cross',
  'hexagon',
];

export function getMarkerProps(index: number, screenIsWide: boolean): Partial<PlotMarker> {
  return {
    size: screenIsWide ? 8 : 4,
    color: COLORS[index % COLORS.length],
    symbol: MARKER_STYLE_OPTIONS[index % MARKER_STYLE_OPTIONS.length],
    line: {
      color: '#666',
      width: 1,
    },
  };
}
