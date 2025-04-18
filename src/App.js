import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ModificarDatos from "./components/ModificarDatos";
import Menu from "./components/Menu";

const App = () => {
  return (
    <Router>
      <Menu />
      <Switch>
        <Route path="/modificar-datos" component={ModificarDatos} />
        {/* Otras rutas */}
      </Switch>
    </Router>
  );
};

export default App;
