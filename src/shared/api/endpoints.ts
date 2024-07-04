export const endpoints = {
  auth: {
    signIn: "api/auth/login",
  },
  role: {
    getAll: "api/role",
    createNew: "api/role",
  },
  admin: {
    getAll: "api/user/admins",
    createNew: "api/auth/admin/register",
  },
} as const;
