import React from 'react';
import { Link } from 'react-router-dom';

class SideBar extends React.Component {

    render() {
        return (
            <div id={`${this.props.sideBarId}`} uk-offcanvas="">
                <div className="uk-offcanvas-bar uk-offcanvas-bar-animation uk-offcanvas-slide">
                    <button className="uk-offcanvas-close" type="button" uk-close=""></button>
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