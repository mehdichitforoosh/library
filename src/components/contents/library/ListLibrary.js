import React from 'react';
import Axios from 'axios';
import { Link, withRouter } from 'react-router-dom';
import queryString from 'query-string';
import Pagination from "../../commons/Pagination";

class ListLibrary extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            itemsPerPageCount: 10,
            totalItemsCount: 0,
            libraries: []
        }
        this.paginate = this.paginate.bind(this);
    }

    paginate(selectedPageNumber) {
        const start = (selectedPageNumber - 1) * this.state.itemsPerPageCount;
        const limit = this.state.itemsPerPageCount;
        this.props.history.push(`/libraries?start=${start}&limit=${limit}`);
        this.getLibraries(start, limit);
        this.setState({
            currentPage: selectedPageNumber
        });
    }

    getLibraries(start, limit) {
        const params = {
            _start: start,
            _limit: limit
        }
        Axios.get(`https://my-json-server.typicode.com/mehdichitforoosh/library/libraries`, { params })
            .then(res => {
                const libraries = res.data;
                // const totalItemsCount = rest.data.count;
                const totalItemsCount = 12;
                //should be checked
                const currentPage = Math.ceil(start / this.state.itemsPerPageCount) + 1;
                this.setState({ currentPage, totalItemsCount, libraries });
            });
    }

    componentDidMount() {
        const values = queryString.parse(this.props.location.search);
        const start = (values.start && values.start > 0) ? values.start : 0;
        const limit = (values.limit && values.limit > 0) ? values.limit : 10;
        this.getLibraries(start, limit);
    }

    render() {
        return (
            <div className="uk-container uk-padding">
                <Link className="uk-button uk-button-primary" to="/libraries/add">افزودن کتابخانه</Link>
                <hr />
                {this.state.totalItemsCount > 0 &&
                    <table className="uk-table uk-table-striped">
                        <thead>
                            <tr>
                                <th>شناسه</th>
                                <th>نام</th>
                                <th>آدرس</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.libraries.map((library) => {
                                return (
                                    <tr key={library.id}>
                                        <td>{library.id}</td>
                                        <td>{library.name}</td>
                                        <td>{library.address}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                }
                {this.state.totalItemsCount > 0 &&
                    <Pagination totalItemsCount={this.state.totalItemsCount} itemsPerPageCount={10}
                        currentPage={this.state.currentPage} renderOnOnlyOnePage={true} callback={this.paginate} />

                }

            </div >
        );
    }
}

export default withRouter(ListLibrary);