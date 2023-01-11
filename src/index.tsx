import { render } from "react-dom";

// Context
import { ThemeProvider } from "./contexts/theme";

// App Component
import App from "./App";

render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
