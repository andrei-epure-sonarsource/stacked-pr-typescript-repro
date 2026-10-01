export type SubscriptionState = "trial" | "active" | "past_due" | "cancelled";

export interface Subscription {
  id: string;
  userId: string;
  state: SubscriptionState;
  renewals: number;
}

export function canUsePremiumFeatures(subscription: Subscription): boolean {
  if (subscription.state === "active") return true;
  if (subscription.state === "trial" && subscription.renewals === 0) return true;
  return false;
}

export function labelSubscription(subscription: Subscription): string {
  return subscription.state === "active" ? "Active" : subscription.state === "trial" ? "Trial" : "Needs attention";
}
