import './App.css';
import React, {Component} from "react";
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import Books from "../Books/BookList/books";
import BookAdd from "../Books/BookAdd/bookAdd"
import BookService from "../../repository/BookService";
import Categories from "../Categories/categories"
import Header from '../Header/header';
import BookEdit from "../Books/BookEdit/bookEdit";


class App extends Component {


    constructor(props) {
        super(props);
        this.state = {
            books: [],
            categories: [],
            selectedBook: {}
        }
    }

    render() {
        return (
            <Router>
                <Header/>
                <main>
                    <div className="container">
                        <Route path={"/books"} exact render={() =>
                            <Books books={this.state.books}
                                   onDelete={this.deleteBook}
                                   onEdit={this.getBook}
                                   onChangeAvailability={this.changeAvailability}/>}/>
                        <Route path={"/books/categories"} exact render={() =>
                            <Categories categories={this.state.categories}/>}/>
                        <Route path={"/books/add"} exact render={() =>
                            <BookAdd onAddBook={this.addBook}
                                     categories={this.state.categories}/>}/>
                        <Route path={"/books/edit/:bookId"} exact render={() =>
                            <BookEdit categories={this.state.categories}
                                      onEdit={this.editBook}
                                      books={this.state.selectedBook}/>}/>
                        <Redirect to={"/books"}/>
                    </div>
                </main>
            </Router>
        );
    }

    componentDidMount() {
        this.loadBooks();
        this.loadCategories();

    }

    loadBooks = () => {
        BookService.fetchBooks()
            .then((data) => {
                this.setState({
                    books: data.data
                })
            });
    }
    addBook = (bookName, bookCategory, bookAuthorId, availableCopies) => {
        BookService.addBook(bookName, bookCategory, bookAuthorId, availableCopies)
            .then(() => {
                this.loadBooks();
            });
    }
    loadCategories = () => {
        BookService.fetchCategories()
            .then((data) => {
                this.setState({
                    categories: data.data
                })
            });
    }

    deleteBook = (id) => {
        BookService.deleteBook(id)
            .then(() => {
                this.loadBooks();
            });
    }


//
    editBook = (bookId, bookName, bookCategory, bookAuthorId, availableCopies) => {
        BookService.editBook(bookId, bookName, bookCategory, bookAuthorId, availableCopies)
            .then(() => {
                this.loadBooks();
            });
    }

    getBook = (bookId) => {
        BookService.getBook(bookId)
            .then((data) => {
                this.setState({
                    selectedBook: data.data
                })
            })
    }

    changeAvailability = (bookId) => {
        BookService.changeAvailability(bookId)
            .then(() => {
               this.loadBooks();
            })
    }
}

export default App;
