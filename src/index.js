import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BaseLayout} from './components/BaseLayout'
import {FlowerAdd} from './components/FlowerAdd'
import {ContactUs} from './components/ContactUs'
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter,Route, Switch} from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
  <BaseLayout>
  <Switch>
    <Route exact path = "/" component = {App} />
    <Route path = "/addflowers" component = {FlowerAdd} />
    <Route path = "/contact-us" component = {ContactUs} />
  </Switch>
  </BaseLayout>
  </BrowserRouter>

  , document.getElementById('root'));
registerServiceWorker();
