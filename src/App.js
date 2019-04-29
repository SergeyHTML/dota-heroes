import React from 'react';
import './app.scss';
import HeroesPage from './components/HeroesPage'
import HeroItemPage from './components/HeroItemPage'

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">

        <Switch>
          <Route path='/:name' component={HeroItemPage} />
          <Route path='/' component={HeroesPage} />
        </Switch>

      </div>
    </Router>
  );
}

export default App;
