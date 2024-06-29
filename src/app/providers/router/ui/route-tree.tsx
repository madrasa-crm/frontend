import { createRootRoute, createRoute, redirect } from "@tanstack/react-router";
import { lazy } from "react";

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
  component: Cabinet,
  beforeLoad: async ({ location }) => {
    const token = localStorage.getItem("token");
    if (!token) {
      throw redirect({
        to: "/auth/login",
        search: {
          redirect: location.href,
        },
      });
    }
    else {
      if(location.pathname === "/") {
        throw redirect({
          to: "/dashboard"
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

export const routeTree = rootRoute.addChildren([
  indexRoute.addChildren([
    
  ]),
  authRoute.addChildren([loginRoute]),
]);