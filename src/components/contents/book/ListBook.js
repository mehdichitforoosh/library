import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

class ListBook extends React.Component {

    state = {
        books: []
    }

    componentDidMount() {
        Axios.get('https://my-json-server.typicode.com/mehdichitforoosh/library/books')
            .then(res => {
                const books = res.data;
                this.setState({ books });
            })
    }

    render() {
        return (
            <div className="uk-container uk-padding">
                <Link className="uk-button uk-button-primary" to="/books/add">افزودن کتاب</Link>
                <hr />
                <div className="uk-child-width-1-3@m" uk-grid="">
                    {this.state.books.map((book) => {
                        return (
                            <div key={book.id}>
                                <div className="uk-card uk-card-default">
                                    <div className="uk-card-media-top">
                                        <img src={book.imageUrl} alt={book.title} />
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
            </div>
        );
    }
}

export default ListBook;