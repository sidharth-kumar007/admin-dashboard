import { ColorModeContext, useMode } from "./theme";
import { CssBaseLine, ThemeProvider } from "@mui/material"
import Topbar from "./scenes/global/Topbar"

function App() {
  
  const [theme, colorMode] = useMode();

  return (
  <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseLine />
      <div className="app">
        <h1>Hello</h1>
      </div>
    </ThemeProvider>
  </ColorModeContext.Provider>
  );
}

export default App;
