import React from 'react';
import {Link} from 'react-router-dom';
import BookTerm from "../BookTerm/bookTerm";

const books = (props) => {
    return (
        <div className={"container mm-4 mt-5"}>
            <div className="col mb-3">
                <div className="row">
                    <div className="col-sm-12 col-md-12">
                        <Link className={"btn btn-block btn-dark"} to={"/books/add"}>Add new product</Link>
                    </div>
                </div>
            </div>
            <div className={"row"}>
                <div className={"table-responsive"}>
                    <table className={"table table-striped"}>
                        <thead>
                        <tr>
                            <th scope={"col"}>Name</th>
                            <th scope={"col"}>Category</th>
                            <th scope={"col"}>Author</th>
                            <th scope={"col"}>Available Copies</th>
                        </tr>
                        </thead>
                        <tbody>
                        {props.books.map((term) => {
                            return (
                                <BookTerm term={term}  onDelete={props.onDelete} onEdit={props.onEdit}/>
                            );
                        })
                        }
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    )
}

export default books;