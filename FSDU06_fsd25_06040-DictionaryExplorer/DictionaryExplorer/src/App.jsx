import { ThemeProvider } from "./contexts/ThemeCOntext";
import Home from "./pages/Home";
import './index.css'

function App() {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
}

export default App;
