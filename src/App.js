import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import ListBooks from './components/ListBooks'
import SearchBooks from './components/SearchBooks'

class BooksApp extends React.Component {
  state = {
    books: [],
  }

  componentDidMount() {
    BooksAPI.getAll().then(results => {
      this.setState({ books: results });
    })
  }

  updateShelf = (book, shelf) => {
    this.setState(prevState => ({
      books: (shelf === 'none')
        ? prevState.books.filter(b => b.id !== book.id)
        : prevState.books.filter(b => b.id !== book.id).concat([{ ...book, shelf: shelf }])
    })
    );
    BooksAPI.update(book, shelf);
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={
          () => <ListBooks books={this.state.books} updateShelf={this.updateShelf} />
        }>

        </Route>

        <Route exact path='/search' render={
          () => <SearchBooks books={this.state.books} updateShelf={this.updateShelf} />
        }>

        </Route>
      </div>
    )
  }
}

export default BooksApp
