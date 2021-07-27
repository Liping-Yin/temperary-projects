import Header from "./components/Header";
import Home from "./pages/Home";
import { Route, Switch } from "react-router-dom";
import OverLaySvg from "./assets/OverLaySvg";
import Cursor from "./components/Cursor";
import Menu from "./components/Menu";
import AppointmentCTA from "./components/AppointmentCTA";
import Treatment from "./pages/Treatment";
import About from "./pages/About";
import Products from "./pages/Products";
function App() {
 
  return (
    <div className="app">
      <Header menuOpenSvg={false} mobile={false} />
      <Menu menuOpen={false} />
      <AppointmentCTA mobile={false} />
      <Home />
      <Cursor />
      <OverLaySvg
        className="overlays"
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
      />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
        <Route path="/treatment">
          <Treatment />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
