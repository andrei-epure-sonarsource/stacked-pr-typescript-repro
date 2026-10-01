export interface WebhookEvent {
  id: string;
  event: string;
  deliveryId: string;
}

export function shouldProcess(event: WebhookEvent, previousDeliveryId: string | undefined): boolean {
  if (event.deliveryId === previousDeliveryId) {
    console.log("duplicate webhook", event.deliveryId);
    return false;
  }
  return event.event === "pull_request.synchronize" || event.event === "pull_request.opened";
}

export function webhookKey(event: WebhookEvent): string {
  return `${event.event}:${event.id}`;
}
