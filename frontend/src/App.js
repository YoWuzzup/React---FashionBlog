import React from "react";
import { Route, Switch } from 'react-router-dom'

import { NavigationBar, Footer, SinglePost } from './Components'
import { Home, Blog, Shop, About } from './Pages'
import { NameContext } from './Context'


function App() {

  return (
    <>
    <NameContext.Provider value={'BellaÖ'} >
      <NavigationBar />
      <Switch >
        <Route path='/' component={Home} exact/>
        <Route path='/blog' component={Blog} exact/>
        <Route path='/shop' component={Shop} exact/>
        <Route path='/about' component={About} exact/>
        <Route path={`/posts/:id`} component={SinglePost} />
      </Switch>
      <Footer />
    </NameContext.Provider>
    </>
  );
}

export default App;