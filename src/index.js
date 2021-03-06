// @flow
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './routes/App';
import jobs from './routes/Jobs';
import story from './routes/Story';
import contact from './routes/Contact';
import Nav from './components/navbar';
import Footer from './components/Footer';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Nav />
      <Switch>
        <Route path="/jobs" component={jobs} />
        <Route path="/story" component={story} />
        <Route path="/contact" component={contact} />
        <Route path="/" component={App} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>,
  document.getElementById('root'),
);
