// Componentes del NPM REACT Router Dom
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Componentes varios
import "./App.scss";
import CharactersPage from "./components/pages/CharactersPage/CharactersPage";
import ChronologyPage from "./components/pages/ChronologyPage/ChronologyPage";
import DetailCharacter from "./components/pages/DetailCharacter/DetailCharacter";
import DetailHouse from "./components/pages/DetailHouse/DetailHouse";
import HomePage from "./components/pages/HomePage/HomePage";
import HousesPage from "./components/pages/HousesPage/HousesPage";
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
            
          <Route path="/character/:character" component ={ DetailCharacter }>
            <DetailCharacter />
          </Route>

          <Route path="/house/:house" component ={ DetailHouse }>
            <DetailHouse />
          </Route>

          <Route path="/chronology">
            <ChronologyPage />
          </Route>

          <Route path="/characters">
            <CharactersPage />
          </Route>

          <Route path="/houses">
            <HousesPage />
          </Route>

          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
