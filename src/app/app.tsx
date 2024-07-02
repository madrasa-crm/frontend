import { Outlet } from "@tanstack/react-router";
import { Suspense } from "react";

// components
import { Toaster } from "@/shared/ui/sonner/sonner";
// import { ProgressLoader } from "@/shared/ui/suspense-loader";

// config
import { RootProvider } from "./providers";

// styles
import "./styles/globals.css";

function App() {
  // const LazyLoad = ProgressLoader();

  return (
    <RootProvider>
      <Suspense>
        <Outlet />
      </Suspense>
      <Toaster />
    </RootProvider>
  );
}

export default App;
