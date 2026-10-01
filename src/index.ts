import { createInvoice } from "./billing.js";
import { notifyMany, notifySupport } from "./notifications.js";
import { renderDashboard } from "./reports.js";
import { createUser, listActiveUsers } from "./users.js";

const ada = createUser("Ada Lovelace", "ada@example.test", "pro");
const grace = createUser("Grace Hopper", "grace@example.test", "enterprise");
const invoiceOne = createInvoice(ada, 3, 20);
const invoiceTwo = createInvoice(grace, 75, 120);

const dashboard = renderDashboard(listActiveUsers(), [invoiceOne, invoiceTwo]);
console.log(dashboard.join("\n"));
console.log(notifyMany([ada, grace], "Monthly account summary"));
console.log(notifySupport("Demo data seeded"));
