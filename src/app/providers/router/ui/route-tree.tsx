import { createRootRoute, createRoute, redirect } from "@tanstack/react-router";
import { jwtDecode } from "jwt-decode";
import { lazy } from "react";

// store
import { useCore } from "@/shared/model/use-core";

// components
import App from "@/app/app";

// lazy load
const SignIn = lazy(() => import("@/pages/sign-in"));
const Cabinet = lazy(() => import("@/pages/cabinet"));
const Role = lazy(() => import("@/pages/role"));
const Admin = lazy(() => import("@/pages/admin"));
const Teacher = lazy(() => import("@/pages/teacher"));
const Subject = lazy(() => import("@/pages/subject"));
const Student = lazy(() => import("@/pages/student"));

const rootRoute = createRootRoute({
  component: () => <App />,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  beforeLoad: async ({ location }) => {
    const token = useCore.getState().userToken;

    if (!token) {
      throw redirect({
        to: "/auth/login",
        search: {
          redirect: location.href,
        },
      });
    } else {
      if (location.pathname === "/") {
        throw redirect({
          to: "/cabinet",
        });
      }
    }
  },
});

export const authRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/auth",
});

export const loginRoute = createRoute({
  getParentRoute: () => authRoute,
  path: "/login",
  component: SignIn,
});

export const cabinetRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/cabinet",
  component: Cabinet,
});

export const unauthorizedRoute = createRoute({
  getParentRoute: () => cabinetRoute,
  path: "/unauthorized",
  component: () => <div>Unauthorized</div>,
});

export const adminRoute = createRoute({
  getParentRoute: () => cabinetRoute,
  path: "/",
  // component: Admin,
  beforeLoad: async () => {
    const token = useCore.getState().userToken;
    const decodedToken = jwtDecode(token!);

    if ((decodedToken as any).role !== 4) {
      throw redirect({
        to: "/cabinet/unauthorized",
      });
    }
    // if (decodedToken.)
  },
});

export const allAdminsRoute = createRoute({
  getParentRoute: () => adminRoute,
  path: "/admins",
  component: Admin,
});

export const roleRoute = createRoute({
  getParentRoute: () => adminRoute,
  path: "/roles",
  component: Role,
});

export const teacherRouteForAdmins = createRoute({
  getParentRoute: () => adminRoute,
  path: "/teachers",
  component: Teacher,
});

export const teacherRoute = createRoute({
  getParentRoute: () => cabinetRoute,
  id: "teacher",
  beforeLoad: async () => {
    const token = useCore.getState().userToken;
    const decodedToken = jwtDecode(token!);

    if (![2, 3, 4].includes((decodedToken as any).role)) {
      throw redirect({
        to: "/cabinet/unauthorized",
      });
    }
  },
});

export const subjectRoute = createRoute({
  getParentRoute: () => adminRoute,
  path: "/subjects",
  component: Subject,
});

export const studentRoute = createRoute({
  getParentRoute: () => teacherRoute,
  path: "/students",
  component: Student,
});

export const routeTree = rootRoute.addChildren([
  indexRoute.addChildren([
    cabinetRoute.addChildren([
      unauthorizedRoute,
      adminRoute.addChildren([
        allAdminsRoute,
        roleRoute,
        teacherRouteForAdmins,
        subjectRoute,
      ]),
      teacherRoute.addChildren([studentRoute]),
    ]),
  ]),
  authRoute.addChildren([loginRoute]),
]);
