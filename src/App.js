import React, { Component } from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Search from './Search'
import Intro from './Intro'

class App extends Component {
  render(){
    return(
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/search" render={(props) => <Search {...props} />} />
            <Route path="/" render={(props) => <Intro {...props} />} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
