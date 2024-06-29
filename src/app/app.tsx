import { Outlet } from "@tanstack/react-router";

// components
import { Toaster } from "@/shared/ui/sonner/sonner";

// config
import { ModeToggle } from "@/shared/ui/mode-toggle/mode-toggle";
import { RootProvider } from "./providers";

// styles
import "./styles/globals.css";

function App() {

  return (
    <RootProvider>
      <h1 className="text-3xl font-bold text-green-500">Madrasa CRM</h1>
      <Outlet />
      <Toaster />
      <ModeToggle />
    </RootProvider>
  )
}

export default App
