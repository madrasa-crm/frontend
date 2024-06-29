// config
import { QueryProvider } from "./query";
import { ThemeProvider } from "./theme";

export const RootProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="madrasa-crm-ui-theme">
      <QueryProvider>{children}</QueryProvider>
    </ThemeProvider>
  );
};