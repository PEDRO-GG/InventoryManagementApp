import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import UpdatePage from "./routes/UpdatePage.jsx";
import { ProductsContextProvider } from "./context/ProductsContext";
const App = () => {
  return (
    <ProductsContextProvider>
      <div className="container">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/products/:id/update" component={UpdatePage} />
          </Switch>
        </Router>
      </div>
    </ProductsContextProvider>
  );
};

export default App;
