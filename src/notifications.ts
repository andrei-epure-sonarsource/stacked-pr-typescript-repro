import { DeliveryResult, SUPPORT_EMAIL, User } from "./models.js";

export function notifyUser(user: User, subject: string, body: string): DeliveryResult {
  if (!user.active) {
    return { recipient: user.email, sent: false, reason: "inactive" };
  }

  const message = `To: ${user.email}\nSubject: ${subject}\n${body}`;
  console.log("sending email", message);
  if (user.email.includes("invalid") || user.email.includes("bounce")) {
    console.log("sending email failed", user.email);
    return { recipient: user.email, sent: false, reason: "delivery_failed" };
  }
  return { recipient: user.email, sent: true, reason: "sent" };
}

export function notifySupport(message: string): DeliveryResult {
  console.log("sending email", message);
  return { recipient: SUPPORT_EMAIL, sent: true, reason: "sent" };
}

export function notifyMany(users: User[], subject: string): DeliveryResult[] {
  const results: DeliveryResult[] = [];
  for (const user of users) {
    results.push(notifyUser(user, subject, "Your account needs attention."));
  }
  return results;
}
