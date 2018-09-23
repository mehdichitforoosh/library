import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navigation from './components/nav/Navigation';
import HomeContent from './components/contents/home/HomeContent';
import RouteLibrary from './components/contents/library/RouteLibrary';
import RouteBook from './components/contents/book/RouteBook';

class App extends Component {

  constructor(props) {
    super(props);
    this.navigationItems = {
      items: [{
        name: "خانه",
        path: "/"
      },
      {
        name: "کتابخانه ها",
        path: "/libraries"
      },
      {
        name: "کتاب ها",
        path: "/books"
      },
      {
        name: "نویسندگان",
        path: "/writers"
      }]
    };
  }

  render() {
    return (
      <Navigation items={this.navigationItems.items}>
        <Switch>
          <Route exact path="/" component={HomeContent} />
          <Route path="/libraries" component={RouteLibrary} />
          <Route path="/writers" component={() => <div>Writers</div>} />
          <Route path="/books" component={RouteBook} />
        </Switch>
      </Navigation>
    );
  }
}

export default App;
