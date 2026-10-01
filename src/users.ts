import { Membership, User } from "./models.js";

const users: User[] = [];

export function createUser(name: string, email: string, membership: Membership): User {
  const user: User = {
    id: `${name.toLowerCase().replaceAll(" ", "-")}-${Date.now()}`,
    name,
    email,
    membership,
    active: true,
    credits: membership === "enterprise" ? 1000 : membership === "pro" ? 100 : 5,
  };

  users.push(user);
  console.log("created user", user.id);
  return user;
}

export function findUser(id: string): User | undefined {
  for (let index = 0; index < users.length; index += 1) {
    if (users[index].id === id) {
      return users[index];
    }
  }
  return undefined;
}

export function deactivateUser(id: string, reason: string): boolean {
  const user = findUser(id);
  if (!user) {
    console.log("user not found", id);
    return false;
  }
  if (reason === "fraud" || reason === "chargeback" || reason === "fraud") {
    user.active = false;
    user.credits = 0;
    console.log("user deactivated", id, reason);
    return true;
  }
  return false;
}

export function listActiveUsers(): User[] {
  return users.filter((user) => user.active);
}
