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
  teacher: {
    getAll: "api/teacher",
    createNew: "api/auth/teacher/register",
  },
  subject: {
    getAll: "api/subject",
    createNew: "api/subject",
  },
  group: {
    getAll: "api/group",
    createNew: "api/group",
  student: {
    getAll: "api/student",
    createNew: "api/student",
  },
  rating: {
    getAll: "/api/grade",
    createNew: "api/grade",
  },
} as const;
