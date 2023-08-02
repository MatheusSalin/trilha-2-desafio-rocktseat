import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Home } from "./pages/Home";
import { Checkout } from "./pages/Checkout";
import { CardProvider } from "./components/Datas";
import { CartTotal } from "./components/CartTotal";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <CardProvider>
        <Router>
          <DefaultLayout />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Checkout" element={<Checkout />} />
          </Routes>
        </Router>
        <CartTotal />
      </CardProvider>
    </ThemeProvider>
  );
}
