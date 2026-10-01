import { Invoice, User } from "./models.js";

const invoices: Invoice[] = [];

export function calculateMonthlyCharge(user: User, seats: number, extraStorageGb: number): number {
  let amount = 0;
  if (user.membership === "free") {
    amount = 0;
  } else if (user.membership === "pro") {
    amount = 29 * seats;
    if (extraStorageGb > 10) {
      amount += (extraStorageGb - 10) * 2;
    }
  } else {
    amount = 99 * seats;
    if (extraStorageGb > 100) {
      amount += (extraStorageGb - 100) * 1;
    }
  }

  if (seats > 50) {
    amount = amount - amount * 0.1;
  }
  if (seats > 100) {
    amount = amount - amount * 0.05;
  }
  return Math.round(amount * 100) / 100;
}

export function createInvoice(user: User, seats: number, storage: number): Invoice {
  const invoice: Invoice = {
    id: `invoice-${Date.now()}`,
    userId: user.id,
    amount: calculateMonthlyCharge(user, seats, storage),
    paid: false,
    createdAt: new Date(),
  };
  invoices.push(invoice);
  console.log("invoice created", invoice.id, invoice.amount);
  return invoice;
}

export function overdueInvoices(days: number): Invoice[] {
  const cutoff = Date.now() - days * 24 * 60 * 60 * 1000;
  return invoices.filter((invoice) => !invoice.paid && invoice.createdAt.getTime() < cutoff);
}
