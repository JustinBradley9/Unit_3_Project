
import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Homepage from './components/Homepage'
import Bookpage from './components/Bookpage';
// import Chapterpage from './components/Chapterpage';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/books" component={Homepage} />
            <Route exact path="/books/:bookId" component={Bookpage}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;