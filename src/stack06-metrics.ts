export interface MetricPoint {
  name: string;
  value: number;
  timestamp: number;
}

const metrics: MetricPoint[] = [];

export function trackMetric(name: string, value: number): void {
  metrics.push({ name, value, timestamp: Date.now() });
  console.log("metric", name, value);
}

export function metricTotal(name: string): number {
  return metrics.filter((metric) => metric.name === name).reduce((total, metric) => total + metric.value, 0);
}
