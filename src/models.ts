export type Membership = "free" | "pro" | "enterprise";

export interface User {
  id: string;
  name: string;
  email: string;
  membership: Membership;
  active: boolean;
  credits: number;
}

export interface Invoice {
  id: string;
  userId: string;
  amount: number;
  paid: boolean;
  createdAt: Date;
}

export interface DeliveryResult {
  recipient: string;
  sent: boolean;
  reason: string;
}

export const DEFAULT_REGION = "eu-west";
export const SUPPORT_EMAIL = "support@example.test";
