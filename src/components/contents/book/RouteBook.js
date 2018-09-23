import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ListBook from './ListBook';
import AddBook from './AddBook';

class RouteBook extends React.Component {

    render() {
        return (
            <Switch>
                <Route path={`${this.props.match.path}/add`} component={AddBook} />
                <Route path={`${this.props.match.path}/`} component={ListBook} />
            </Switch>
        );
    }
}

export default RouteBook;
