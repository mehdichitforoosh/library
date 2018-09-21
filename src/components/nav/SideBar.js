import React from 'react';
import { Link } from 'react-router-dom';

class SideBar extends React.Component {

    render() {
        return (
            <div id={`${this.props.sideBarId}`} uk-offcanvas="overlay : true">
                <div className="uk-offcanvas-bar">
                    <ul className="uk-nav uk-nav-primary">
                        {this.props.items.map((item, index) => {
                            return (
                                <li key={index}><Link to={`${item.path}`}>{item.name}</Link></li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}

export default SideBar;