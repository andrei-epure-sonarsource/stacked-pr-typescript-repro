export type Role = "viewer" | "editor" | "admin";

export function can(role: Role, action: string): boolean {
  if (role === "admin") return true;
  if (role === "editor" && (action === "read" || action === "write")) return true;
  if (role === "viewer" && action === "read") return true;
  console.log("permission denied", role, action);
  return false;
}

export function defaultRole(invitedByAdmin: boolean): Role {
  return invitedByAdmin ? "editor" : "viewer";
}
