import axios from '../custom-axios/axios';

const BookService = {

    fetchBooks: () => {
        return axios.get("/books");
    },
    fetchCategories: () => {
        return axios.get('books/categories');
    },
    deleteBook: (id) => {
        return axios.delete(`books/delete/${id}`);
    },
    addBook: (bookName,bookCategory, bookAuthorId, availableCopies) => {
        return axios.post("books/add", {
            "bookName" : bookName,
            "bookCategory" : bookCategory,
            "bookAuthorId" : bookAuthorId,
            "availableCopies" : availableCopies
        });
    },
    editBook: (bookId, bookName, bookCategory, bookAuthorId, availableCopies) => {
        return axios.put(`books/edit/${bookId}`, {
            "bookName" : bookName,
            "bookCategory" : bookCategory,
            "bookAuthorId" : bookAuthorId,
            "availableCopies" : availableCopies
        });
    },
    getBook: (id) => {
        return axios.get(`books/${id}`);
    },
    changeAvailability: (id) => {
        return axios.put(`books/availability/${id}`);
    }
}
export default BookService;
