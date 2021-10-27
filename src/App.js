import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Registration from "./Pages/Registration/Registration";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/cadastro" component={Registration}></Route>
      </Switch>
    </BrowserRouter>
  );
}
