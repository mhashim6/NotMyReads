import React from 'react'
import Book from './Book'


const BooksGrid = ({ books, updateShelf }) => (
    <ol className="books-grid">
        {books.filter(b => b.imageLinks).map(book => (
            <li key={book.id}>
                <Book book={book} updateShelf={updateShelf} />
            </li>
        ))}
    </ol>
)

export default BooksGrid;
