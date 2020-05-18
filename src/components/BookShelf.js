import React from 'react'
import BooksGrid from './BooksGrid'


const BookShelf = ({ shelfName, books, updateShelf }) => (
    <div className="bookshelf">
        <h2 className="bookshelf-title">{shelfName}</h2>
        <div className="bookshelf-books">
            <BooksGrid books={books} updateShelf={updateShelf} />
        </div>
    </div>
)

export default BookShelf;
