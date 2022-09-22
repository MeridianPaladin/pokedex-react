export const toFeetInches = (value) => {
  let height = value * 3.937;
  const feet = Math.floor(height);
  const inches = Math.round((height - feet) * 12);
  const result = `${feet}'${inches}"`;
  return result;
};
export const toPounds = (value) => {
  let calc = value / 4.53;
  const pounds = calc.toFixed(1);
  return pounds;
};
export const getWidthBar = (max, stat) => {
  const width = (100 * stat) / max;
  return width
};
