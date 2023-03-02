export const NAMED_COLORS = [
  "Chocolate",
  "red",
  "darkgreen",
  "blue",
  "purple",
  "orange",
  "maroon",
  "CornflowerBlue",
  "coral",
  "aqua",
  "darkgoldenrod",
  "lightgreen",
];

export const COLORS = [];

for (let a = 0; a < NAMED_COLORS / 2; a++) {
  for (let b = 0; b < 2; b++) {
    COLORS.push(NAMED_COLORS[a * 2 + b]);
    let i = a * 20;
    if (b === 1) {
      i = 120 + i;
    }
    COLORS.push("hsl(" + i + ", 85%, 30%)");
    COLORS.push("hsl(" + (i + 8) + ", 75%, 15%)");
    COLORS.push("hsl(" + (i + 15) + ", 95%, 45%)");
  }
}
