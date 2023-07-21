import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/home";
import Products from "./Components/products";
import ContactUs from "./Components/contactUs";
import Cart from "./Components/cart";
import Signup from "./Components/signup";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Products" component={Products} />
        <Route exact path="/ContactUs" component={ContactUs} />
        <Route exact path="/Cart" component={Cart} />
        <Route exact path="/SignUp" component={Signup} />
      </Switch>
    </div>
  );
}

export default App;
