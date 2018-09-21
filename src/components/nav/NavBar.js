import React from 'react';

class NavBar extends React.Component {

    render() {
        return (
            <nav className="uk-navbar uk-navbar-container" uk-navbar="">
                <div className="uk-navbar-right">
                    <a className="uk-navbar-toggle" href={`#${this.props.sideBarRefId}`} uk-toggle="">
                        <span uk-navbar-toggle-icon=""></span> 
                        {/* <span className="uk-margin-small-right">منو</span> */}
                    </a>
                </div>
            </nav>
        );
    }
}

export default NavBar;