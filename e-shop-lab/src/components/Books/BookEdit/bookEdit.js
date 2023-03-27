import React from 'react';
import {useHistory} from 'react-router-dom';

const BookEdit = (props) => {

    const history = useHistory();
    const [formData, updateFormData] = React.useState({
        bookName: "",
        bookCategory: "",
        bookAuthorId: 0,
        availableCopies: 0
    })

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        const bookName = formData.bookName !== "" ? formData.bookName : props.books.bookName;
        const bookCategory = formData.bookCategory !== 0 ? formData.bookCategory : props.books.bookCategory;
        const bookAuthorId = formData.bookAuthorId !== 0 ? formData.bookAuthorId : props.books.bookAuthorId;
        const availableCopies = formData.availableCopies !== 0 ? formData.availableCopies : props.books.availableCopies;

        props.onEdit(props.books.bookId, bookName, bookCategory, bookAuthorId, availableCopies);
        history.push("/books");
    }

    return(
        <div className="row mt-5">
            <div className="col-md-5">
                <form onSubmit={onFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="bookName">Book name</label>
                        <input type="text"
                               className="form-control"
                               id="bookName"
                               name="bookName"
                               placeholder={props.books.bookName}
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Book Category</label>
                        <select name="bookCategory" className="form-control" onChange={handleChange}>
                            {props.categories.map((term) =>
                                <option value={term} key={term}>{term}</option>
                            )}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="bookAuthorId">Author Id</label>
                        <input type="text"
                               className="form-control"
                               id="bookAuthorId"
                               name="bookAuthorId"
                               placeholder={props.books.bookAuthorId}
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Available Copies</label>
                        <input type="text"
                               className="form-control"
                               id="availableCopies"
                               name="availableCopies"
                               placeholder={props.books.availableCopies}
                               onChange={handleChange}
                        />
                    </div>
                    <button id="submit" type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default BookEdit;