import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { SummonerPage } from "./pages/SummonerPage";
import { MatchDetailPage } from "./pages/MatchDetailPage";
import NotFoundPage from "./pages/NotFoundPage";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <div id="page-body">
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/summonerdetail/:name/" component={SummonerPage} />
            <Route
              path="/matchdetail/:name/:matchId"
              component={MatchDetailPage}
            />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
