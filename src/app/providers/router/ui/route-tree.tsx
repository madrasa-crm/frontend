/** eslint-disable react-refresh/only-export-components */
/** eslint-disable @typescript-eslint/no-explicit-any */
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
const Teacher = lazy(() => import("@/pages/teacher/ui/teacher"));
const Subject = lazy(() => import("@/pages/subject"));
const Group = lazy(() => import("@/pages/group"));
const Student = lazy(() => import("@/pages/student"));
const Rating = lazy(() => import("@/pages/rating"));
const NewTeacher = lazy(() => import("@/pages/teacher/ui/new-teacher"));

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
  beforeLoad: async () => {
    const token = useCore.getState().userToken;
    const decodedToken = jwtDecode(token!);

    if ((decodedToken as any).role !== 4) {
      throw redirect({
        to: "/cabinet/unauthorized",
      });
    }
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

export const groupRoute = createRoute({
  getParentRoute: () => adminRoute,
  path: "/groups",
  component: Group,
export const newTeacherRoute = createRoute({
  getParentRoute: () => adminRoute,
  path: "/teachers/new",
  component: NewTeacher,
});

export const teacherRoute = createRoute({
  getParentRoute: () => cabinetRoute,
  id: "teacher",
  beforeLoad: async () => {
    const token = useCore.getState().userToken;
    const decodedToken = jwtDecode(token!);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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

export const ratingRoute = createRoute({
  getParentRoute: () => teacherRoute,
  path: "/rating",
  component: Rating,
});

export const routeTree = rootRoute.addChildren([
  indexRoute.addChildren([
    cabinetRoute.addChildren([
      unauthorizedRoute,
      adminRoute.addChildren([
        allAdminsRoute,
        roleRoute,
        teacherRouteForAdmins.addChildren([newTeacherRoute]),
        subjectRoute,
        groupRoute,
      ]),
      teacherRoute.addChildren([studentRoute, ratingRoute]),
    ]),
  ]),
  authRoute.addChildren([loginRoute]),
]);
