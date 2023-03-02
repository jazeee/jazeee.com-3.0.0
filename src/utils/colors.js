const namedColors = [
  "orange",
  "maroon",
  "CornflowerBlue",
  "coral",
  "aqua",
  "darkgoldenrod",
  "lightgreen",
  "Chocolate",
  "red",
  "darkgreen",
  "blue",
  "purple",
];

export const COLORS = [];

for (let a = 0; a < namedColors.length / 2; a++) {
  for (let b = 0; b < 2; b++) {
    COLORS.push(namedColors[a * 2 + b]);
    let i = a * 20;
    if (b === 1) {
      i = 120 + i;
    }
    COLORS.push(`hsl(${i}, 85%, 30%)`);
    COLORS.push(`hsl(${i + 8}, 75%, 15%)`);
    COLORS.push(`hsl(${i + 15}, 95%, 45%)`);
  }
}

export const getColor = index => COLORS[index % COLORS.length];
