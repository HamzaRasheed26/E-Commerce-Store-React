import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/home";
import Products from "./Components/products";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Products" component={Products} />
      </Switch>
    </div>
  );
}

export default App;
