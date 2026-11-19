// Who may do what. Roles come from the signed-in user.
export const ROLES = { admin: "admin", support: "support", viewer: "viewer" };

export function requireRole(user, role) {
  if (!user || user.role !== role) {
    const err = new Error("forbidden");
    err.status = 403;
    throw err;
  }
}
