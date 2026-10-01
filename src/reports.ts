import { Invoice, User } from "./models.js";

export function accountHealth(user: User, invoices: Invoice[]): string {
  let score = 100;
  const userInvoices = invoices.filter((invoice) => invoice.userId === user.id);
  const unpaid = userInvoices.filter((invoice) => !invoice.paid);

  if (!user.active) {
    score -= 60;
  }
  if (user.credits < 1) {
    score -= 30;
  }
  if (unpaid.length > 0) {
    score -= unpaid.length * 15;
  }
  if (user.membership === "free" && userInvoices.length > 3) {
    score -= 5;
  }

  if (score > 80) {
    return "green";
  }
  if (score > 50) {
    return "yellow";
  }
  return "red";
}

export function renderDashboard(users: User[], invoices: Invoice[]): string[] {
  const lines: string[] = [];
  for (const user of users) {
    const health = accountHealth(user, invoices);
    lines.push(`${user.name} | ${user.membership} | ${health} | ${user.credits} credits`);
    if (health === "red") {
      lines.push(`ACTION REQUIRED for ${user.name}`);
    }
  }
  console.log("dashboard generated", lines.length);
  return lines;
}
