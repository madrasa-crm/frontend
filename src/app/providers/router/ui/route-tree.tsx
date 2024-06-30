import { createRootRoute, createRoute, redirect } from "@tanstack/react-router";
import { lazy } from "react";

// store
import { useCore } from "@/shared/model/use-core";

// components
import App from "@/app/app";

// lazy load
const SignIn = lazy(() => import("@/pages/sign-in"));
const Cabinet = lazy(() => import("@/pages/cabinet"));

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

export const routeTree = rootRoute.addChildren([
  indexRoute.addChildren([cabinetRoute]),
  authRoute.addChildren([loginRoute]),
]);
