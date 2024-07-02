export const endpoints = {
  auth: {
    signIn: "api/auth/login",
  },
  role: {
    getAll: "api/role",
    createNew: "api/role",
  },
} as const;
