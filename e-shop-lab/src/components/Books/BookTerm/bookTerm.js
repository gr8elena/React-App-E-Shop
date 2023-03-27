import React from 'react';
import {Link} from 'react-router-dom';
import './bookTerm.css'

const bookTerm = (props) => {
    return (
        <tr>
            <td>{props.term.bookName}</td>
            <td>{props.term.bookCategory}</td>
            <td>{props.term.bookAuthor.authorName} {props.term.bookAuthor.authorSurname}</td>
            <td>{props.term.availableCopies}</td>
            <td>
                {props.term.available ? (
                    <span className={"green-circle"}/>
                ) : (
                    <span className={"red-circle"}/>
                )}
            </td>
            <td className={"text-right"}>
                <button title={"Delete"} className={"btn btn-danger"}
                   onClick={() => props.onDelete(props.term.bookId)}>
                    Delete
                </button>
                <Link className={"btn btn-info ml-2"}
                      onClick={() => props.onEdit(props.term.bookId)}
                      to={`/books/edit/${props.term.bookId}`}>
                    Edit
                </Link>
                <button title={"Borrowed"} className={"btn btn-secondary  ml-2"}
                   onClick={() => props.onChangeAvailability(props.term.bookId)}>
                    Borrowed
                </button>
            </td>
        </tr>
    )
}

export default bookTerm;