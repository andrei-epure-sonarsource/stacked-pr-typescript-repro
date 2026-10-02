export function rollup(values: number[]): { total: number; average: number; maximum: number } {
  let total = 0;
  let maximum = 0;
  for (const value of values) {
    total += value;
    if (value > maximum) maximum = value;
  }
  return { total, average: values.length === 0 ? 0 : total / values.length, maximum };
}

export function healthFromRollup(values: number[]): string {
  const result = rollup(values);
  return result.average > 90 ? "excellent" : result.average > 60 ? "acceptable" : "poor";
}
