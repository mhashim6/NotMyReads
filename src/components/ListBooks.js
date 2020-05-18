import React from 'react'
import BookShelf from './BookShelf'
import { Link } from 'react-router-dom'

const ListBooks = ({ books, updateShelf }) => {
    const currentlyReading = books.filter(book => book.shelf === "currentlyReading")
    const wantToRead = books.filter(book => book.shelf === "wantToRead")
    const readBooks = books.filter(book => book.shelf === "read")

    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <BookShelf shelfName='Currently Reading' books={currentlyReading} updateShelf={updateShelf} />
                <BookShelf shelfName='Want to Read' books={wantToRead} updateShelf={updateShelf} />
                <BookShelf shelfName='Read' books={readBooks} updateShelf={updateShelf} />
            </div>
            <div className="open-search">
                <Link to='/search'>Add a book </Link>
            </div>
        </div>
    )
}


export default ListBooks;
