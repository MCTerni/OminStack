import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

import Landing from "./pages/Landing";
import OrphanagesMap from "./pages/OrphanagesMap";
import Orphanage from "./pages/Orphanage";
import CreateOrphanage from "./pages/CreateOrphanage";

function Routes() {
      return (
          <Router>
              <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/orphanages" exact component={OrphanagesMap} />
                <Route path="/orphanages/create" exact component={CreateOrphanage} />
                <Route path="/orphanages/:id" exact component={Orphanage} />
              </Switch>
          </Router>
      )
  }

export default Routes;