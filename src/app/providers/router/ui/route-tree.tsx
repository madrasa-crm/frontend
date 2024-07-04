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
  path: "/admin",
  component: Admin,
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

export const roleRoute = createRoute({
  getParentRoute: () => cabinetRoute,
  path: "/roles",
  component: Role,
});

export const routeTree = rootRoute.addChildren([
  indexRoute.addChildren([
    cabinetRoute.addChildren([unauthorizedRoute, roleRoute, adminRoute]),
  ]),
  authRoute.addChildren([loginRoute]),
]);
