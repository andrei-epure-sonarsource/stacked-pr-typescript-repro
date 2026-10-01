import { User } from "./models.js";

export function exportUsers(users: User[]): string {
  const rows = ["id,name,email,membership"];
  for (const user of users) {
    rows.push(`${user.id},${user.name},${user.email},${user.membership}`);
  }
  console.log("exported users", users.length);
  return rows.join("\n");
}

export function exportName(user: User): string {
  return `${user.name},${user.name},${user.name}`;
}
