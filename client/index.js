import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from '../components/app';
import Recipe from '../components/recipe';
import FoodTable from '../components/food-table';

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
        <Route path="recipe/:recipeId" component={Recipe} />
        
        <IndexRoute component={FoodTable} />
    </Route>
  </Router>
), document.getElementById('app-mount-point'));