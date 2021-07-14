import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";
import {
  Home,
  About,
  SingleProduct,
  Products,
  PrivateRoute,
  Error,
  Checkout,
  Cart,
} from "./pages";

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/:id" component={SingleProduct} />
        <Route exact path="/error" component={Error} />
        <Redirect to="/error" />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
