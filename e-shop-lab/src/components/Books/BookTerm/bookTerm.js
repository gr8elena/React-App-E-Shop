import React from 'react';
import {Link} from 'react-router-dom';

const bookTerm = (props) => {
    return (
        <tr>
            <td>{props.term.bookName}</td>
            <td>{props.term.bookCategory}</td>
            <td>{props.term.bookAuthor.authorName} {props.term.bookAuthor.authorSurname}</td>
            <td>{props.term.availableCopies}</td>
            <td className={"text-right"}>
                <a title={"Delete"} className={"btn btn-danger"}
                   onClick={() => props.onDelete(props.term.bookId)}>
                    Delete
                </a>
                <Link className={"btn btn-info ml-2"}
                      onClick={() => props.onEdit(props.term.bookId)}
                      to={`/books/edit/${props.term.bookId}`}>
                    Edit
                </Link>
            </td>
        </tr>
    )
}

export default bookTerm;