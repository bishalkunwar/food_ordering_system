import "./App.css";
import Header from "./component/layout/Header/Header.js";
import Footer from "./component/layout/Footer/Footer.js";
import Home from "./component/Home/Home.js";
import Products from "./component/Product/Products.js";
import ProductDetails from "./component/Product/ProductDetails";
import Search from "./component/Product/Search.js";
import LoginSignUp from "./component/User/LoginSignUp";
import UserOptions from "./component/layout/Header/UserOptions";
import ProtectedRoute from "./component/Route/ProtectedRoute";
import Profile from "./component/User/Profile.js";
import UpdateProfile from "./component/User/UpdateProfile.js";


import {useSelector} from "react-redux";
import {loadUser} from "./actions/userAction";

// import Loader from "./component/layout/Loader/Loader";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import WebFont from "webfontloader";
import React from "react";
// import { useEffect, useState } from "react";
import store from "./store";
// import React from "react";

const App = () => {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });

    store.dispatch(loadUser());
  }, []);

  return (
    <Router>
      <Header />
      {isAuthenticated && <UserOptions user={user} />}
      <Switch>
        {" "}
        <Route exact path="/" component={Home} />{" "}
        <Route exact path="/product/:id" component={ProductDetails} />{" "}
        <Route exact path="/products" component={Products} />{" "}
        <Route path="/products/:keyword" component={Products} />{" "}
        <Route exact path="/search" component={Search} />{" "}
        <Route exact path="/login" component={LoginSignUp} />
        <ProtectedRoute exact path="/account" component={Profile}/>
        <ProtectedRoute exact path="/me/update" component={UpdateProfile}/>
      </Switch>{" "}
      <Footer />
    </Router>
  );
};

export default App;
