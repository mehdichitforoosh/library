import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ListLibrary from './ListLibrary';
import AddLibrary from './AddLibrary';

class RouteLibrary extends React.Component {

    render() {
        return (
            <Switch>
                <Route path={`${this.props.match.path}/add`} component={AddLibrary} />
                <Route path={`${this.props.match.path}/`} component={ListLibrary} />
            </Switch>
        );
    }
}

export default RouteLibrary;
