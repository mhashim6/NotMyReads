import React, { Component } from 'react'
import BooksGrid from './BooksGrid'
import * as BooksAPI from '../BooksAPI'
import { Link } from 'react-router-dom';

class SearchBooks extends Component {

    state = {
        query: '',
        bookResults: [],
    }

    updateQuery = q => {
        this.setState({ query: q });
        this.searchBooks(q.trim());
    };

    searchBooks = query => {
        if (query)
            BooksAPI.search(query).then(results => {
                if (results.error)
                    this.setState({ bookResults: [] });
                else
                    this.setState({ bookResults: results });
            })
        else
            this.setState({ bookResults: [] })
    }

    render() {
        const { bookResults } = this.state;
        const { books, updateShelf } = this.props;
        const matchingBooks = books.filter(b => bookResults.find(r => r.id === b.id));
        const showingBooks = bookResults.map(r => {
            const book = matchingBooks.find(m => m.id === r.id);
            return book ? { ...r, shelf: book.shelf } : r
        })

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to='/'>Close</Link>
                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            value={this.state.query}
                            onChange={(e) => this.updateQuery(e.target.value)}
                            placeholder="Search by title or author" />
                    </div>
                </div>
                <div className="search-books-results">
                    <BooksGrid books={showingBooks} updateShelf={updateShelf} />
                </div>
            </div>
        )
    }
}
export default SearchBooks;
