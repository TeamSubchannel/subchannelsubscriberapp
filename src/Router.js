import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import App from "./screens/App";
// import Profile from '';

// function isAuthenticated() {
//   return localStorage.getItem("authorization");
// }

// function PrivateRoute({ component: Component, ...rest }) {
//   return (
//     <Route
//       {...rest}
//       render={props =>
//         isAuthenticated() ? (
//           <Component {...props} />
//         ) : (
//           <Redirect
//             to={{ pathname: "/login", state: { from: props.location } }}
//           />
//         )
//       }
//     />
//   );
// }
// function DefaultRoute({ component: Component, ...rest }) {
//   return (
//     <Route
//       {...rest}
//       render={props =>
//         !isAuthenticated() ? (
//           <Component {...props} />
//         ) : (
//           <Redirect
//             to={{ pathname: "/dashboard", state: { from: props.location } }}
//           />
//         )
//       }
//     />
//   );
// }

class Router extends Component {
  render() {
    return (
      <div className="Router">
        <div>
          <Switch>
            {/* <DefaultRoute exact path="/" component={Login} />
            <DefaultRoute exact path="/login" component={Login} />
            <DefaultRoute exact path="/signup" component={Signup} />
            <Route
              exact
              path="/dashboard"
              render={() => <Redirect to="/dashboard/manage" />}
            />
            <Route path="/upgrade/:starter" component={Upgrade} />
            <Route path="/upgrade/:pro" component={Upgrade} />
            <PrivateRoute path="/dashboard/manage" component={Dashboard} /> */}
            <Route path="/" component={App} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Router;
