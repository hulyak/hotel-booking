import "./App.css";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";

import { Route, Switch } from "react-router-dom";


function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/rooms" exact>
          <Rooms />
        </Route>
        <Route path="/rooms/:slug" exact>
          <SingleRoom />
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
    </>
  );
}

export default App;
