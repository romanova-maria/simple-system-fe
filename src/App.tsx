import { ThemeProvider } from "styled-components";
import primaryTheme from "./styles/themes/primaryTheme";
import GlobalStyle from "./styles/GlobalStyle";
import { Users } from "./Users";

function App() {
  return (
    <ThemeProvider theme={primaryTheme}>
      <GlobalStyle />
      <Users />
    </ThemeProvider>
  );
}

export default App;
