import { ThemeProvider } from "@/providers/theme/theme-provider";
import { AppRoutes } from "@/routes/index";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
