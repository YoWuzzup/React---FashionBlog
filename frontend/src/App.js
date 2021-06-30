import React from "react";
import { Route, Switch } from 'react-router-dom'

import { NavigationBar, Footer } from './Components'
import { Home, Blog, Shop, About } from './Pages'

function App() {
  return (
    <>
      <NavigationBar />
      <Switch >
        <Route path='/' component={Home} exact/>
        <Route path='/blog' component={Blog} exact/>
        <Route path='/shop' component={Shop} exact/>
        <Route path='/about' component={About} exact/>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
