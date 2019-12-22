import React from "react";
import { Switch, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import ReservationList from "./components/reservationList";
import MakeReservation from "./components/makeReservation";
import { Provider } from "./context";

function App() {
  return (
    <div className="center w85">
      <Header />
      <div className="container">
        <Provider>
          <Switch>
            <Route exact path="/" component={ReservationList} />
            <Route exact path="/make-reservation" component={MakeReservation} />
          </Switch>
        </Provider>
      </div>
    </div>
  );
}

export default App;
