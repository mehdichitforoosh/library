import React from 'react';
import Axios from 'axios';
import { Link, withRouter } from 'react-router-dom';
import queryString from 'query-string';
import Pagination from "../../commons/Pagination";

class ListBook extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            itemsPerPageCount: 10,
            totalItemsCount: 0,
            books: []
        }
        this.paginate = this.paginate.bind(this);
    }

    paginate(selectedPageNumber) {
        const start = (selectedPageNumber - 1) * this.state.itemsPerPageCount;
        const limit = this.state.itemsPerPageCount;
        this.props.history.push(`/books?start=${start}&limit=${limit}`);
        this.getBooks(start, limit);
        this.setState({
            currentPage: selectedPageNumber
        });
    }

    getBooks(start, limit) {
        const params = {
            _start: start,
            _limit: limit
        }
        Axios.get(`https://my-json-server.typicode.com/mehdichitforoosh/library/books`, { params })
            .then(res => {
                const books = res.data;
                // const totalItemsCount = rest.data.count;
                const totalItemsCount = 5;
                //should be checked
                const currentPage = Math.ceil(start / this.state.itemsPerPageCount) + 1;
                this.setState({ currentPage, totalItemsCount, books });
            });
    }

    componentDidMount() {
        const values = queryString.parse(this.props.location.search);
        const start = (values.start && values.start > 0) ? values.start : 0;
        const limit = (values.limit && values.limit > 0) ? values.limit : 10;
        this.getBooks(start, limit);
    }

    render() {
        return (
            <div className="uk-container uk-padding">
                <Link className="uk-button uk-button-primary" to="/books/add">افزودن کتاب</Link>
                <hr />
                {this.state.totalItemsCount > 0 &&
                    <div className="uk-child-width-1-3@m" uk-grid="" uk-height-match="target: > div > .uk-card">
                        {this.state.books.map((book) => {
                            let imageUrl = (book.imageUrl) ? book.imageUrl : "/images/no-image.png";
                            return (
                                <div key={book.id}>
                                    <div className="uk-card uk-card-default ">
                                        <div className="uk-card-media-top">
                                            <img className="uk-height-medium uk-width-1-1" src={imageUrl} alt={book.title} />
                                        </div>
                                        <div className="uk-card-body">
                                            <h3 className="uk-card-title">{book.title}</h3>
                                            <h4>{book.writerName}</h4>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                }
                {this.state.totalItemsCount > 0 &&
                    <Pagination totalItemsCount={this.state.totalItemsCount} itemsPerPageCount={10}
                        currentPage={this.state.currentPage} renderOnOnlyOnePage={false} callback={this.paginate} />

                }
            </div>
        );
    }
}

export default withRouter(ListBook);