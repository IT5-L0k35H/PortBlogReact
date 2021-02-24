import React from 'react';
import Navigation from './components/navigation';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import PageRenderer from './page-renderer'
import Post from './pages/post'
import EditPost from './pages/edit-post'

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route path='/post/:id' component={Post} />
          <Route path="/edit-post" component={EditPost} />
          <Route path="/:page" component={PageRenderer} />
          <Route path="/" render={() => <Redirect to="/home" />} />
          <Route component={() => 404} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
