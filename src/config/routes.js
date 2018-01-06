import React from 'react';
// import { Router, Route, hashHistory } from 'react-router';
import { HashRouter, Route } from 'react-router-dom';
// import MainContainer from '../containers/main/mainContainer';
import MainContainer from '../containers/Main/MainContainer';


// const routes = (
//   <Router history={hashHistory}>
//     <Router path='/' component={MainContainer} />
//   </Router>
// )

const routes = (
  <HashRouter>
    <div>
      <Route path='/' component={MainContainer}/>
    </div>
  </HashRouter>
)
export default routes;
