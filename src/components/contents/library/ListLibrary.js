import React from 'react';
import Axios from 'axios';

class ListLibrary extends React.Component {

    state = {
        libraries: []
    }

    componentDidMount() {
        Axios.get(`https://my-json-server.typicode.com/mehdichitforoosh/library/libraries`)
            .then(res => {
                const libraries = res.data;
                this.setState({ libraries });
            })
    }

    render() {
        return (
            <div className="uk-container uk-padding">
                <button className="uk-button uk-button-primary">افزودن کتابخانه</button>
                <hr />
                <table className="uk-table uk-table-striped">
                    <thead>
                        <tr>
                            <th>شناسه</th>
                            <th>نام</th>
                            <th>آدرس</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.libraries.map((library, index) => {
                            return (
                                <tr key={index}>
                                    <td>{library.id}</td>
                                    <td>{library.name}</td>
                                    <td>{library.address}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                <ul className="uk-pagination uk-flex-center" uk-margin="">
                    <li><a href="#"><span uk-pagination-previous=""></span></a></li>
                    <li><a href="#">1</a></li>
                    <li className="uk-disabled"><span>...</span></li>
                    <li><a href="#">5</a></li>
                    <li><a href="#">6</a></li>
                    <li className="uk-active"><span>7</span></li>
                    <li><a href="#">8</a></li>
                    <li><a href="#"><span uk-pagination-next=""></span></a></li>
                </ul>
            </div>
        );
    }
}

export default ListLibrary;