export interface AuditEvent {
  action: string;
  actor: string;
  createdAt: Date;
  details: string;
}

const events: AuditEvent[] = [];

export function recordAudit(action: string, actor: string, details: string): void {
  events.push({ action, actor, createdAt: new Date(), details });
  console.log("audit", action, actor);
}

export function latestAuditEvents(limit: number): AuditEvent[] {
  return events.slice(events.length - limit).reverse();
}
