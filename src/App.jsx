//import logo from './logo.svg';
/*
Son componentes del NPM REACT Router Dom 
import {Router, Route, Switch } from "react-router-dom"}; = sustituir por lo siguiente
*/
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.scss";
// importanciones de la page
import CharactersPage from "./components/pages/CharactersPage/CharactersPage";
import ChronologyPage from "./components/pages/ChronologyPage/ChronologyPage";
import DetailPage from "./components/pages/DetailPage/DetailPage";
import HomePage from "./components/pages/HomePage/HomePage";
import HousesPage from "./components/pages/HousesPage/HousesPage";

// importación components routes
import NavBar from "./components/shared/NavBar/NavBar";

function App() {
  return (
    //Para que se pueda renderizar ha de ir incluido en un <div>
    //Se renerizan los componentes principales
    <div>
      {/* Se crean las rutas */}
      <Router>
        {/* Se renderizan los componentes de las rutas */}
        <NavBar></NavBar>

        <Switch>
          {/* Renderizar las rutas principales */}
          <Route path="/chronology">
            <ChronologyPage />
          </Route>

          <Route path="/characters">
            <CharactersPage />
          </Route>

          <Route path="/houses">
            <HousesPage />
          </Route>

          {/* <Route path="/:id">
            <DetailPage />
          </Route> */}

          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
