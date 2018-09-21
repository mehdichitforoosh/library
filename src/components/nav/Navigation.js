import React from 'react';
import NavBar from './NavBar';
import SideBar from './SideBar';

class Navigation extends React.Component {

    render() {
        return (
            <div className="uk-offcanvas-content">
                <NavBar sideBarRefId="offcanvs-sidebar" />
                <SideBar sideBarId="offcanvs-sidebar" items={this.props.items} />
                {this.props.children}
            </div>
        );
    }
}

export default Navigation;