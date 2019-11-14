import React from 'react';
import Header from './Header';
import AboutUs from './AboutUs';
import Bio from './Bio';
import { Switch, Route } from 'react-router-dom';



function App(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={AboutUs} />
        <Route path='/bio' component={Bio} />
      </Switch>
    </div>
  );
}

export default App;