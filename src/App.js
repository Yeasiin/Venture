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
  AuthWrapper,
} from "./pages";

function App() {
  return (
    <AuthWrapper>
      <Router>
        <Navbar />
        <Sidebar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/cart" component={Cart} />
          {/* Proctored Route */}
          <PrivateRoute exact path="/checkout">
            <Checkout />
          </PrivateRoute>
          {/* End Of Proctored Route */}
          <Route exact path="/products" component={Products} />
          <Route exact path="/products/:id" component={SingleProduct} />
          <Route exact path="/error" component={Error} />
          <Redirect to="/error" />
        </Switch>
        <Footer />
      </Router>
    </AuthWrapper>
  );
}

export default App;
