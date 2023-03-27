import React from 'react';
import {Link} from 'react-router-dom';
import BookTerm from "../BookTerm/bookTerm";
import ReactPaginate from "react-paginate";

class Books extends React.Component{

    constructor(props) {
        super(props);

        this.state={
            page:0,
            size:5
        }
    }

    render(){

        const offset = this.state.size * this.state.page;
        const nextPageOffset = offset + this.state.size;
        const pageCount = Math.ceil(this.props.books.length/this.state.size);
        const books = this.getBooksPage(offset,nextPageOffset);

        return(
            <div className={"container mm-4 mt-5"}>
            <div className="col mb-3">
                <div className="row">
                    <div className="col-sm-12 col-md-12" >
                        <Link className={"btn btn-md btn-dark btn-"} to={"/books/add"}>Add new product</Link>
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
                            <th scope={"col"}>Availability</th>
                        </tr>
                        </thead>
                        <tbody>
                        {books}
                        </tbody>
                    </table>
                </div>
            </div>
                <ReactPaginate previousLabel = {"<"}
                               nextLabel={">"}
                               breakLabel={<a href="/#">...</a>}
                               breakClassName={"break-me"}
                               pageClassName={"page-item"}
                               pageLinkClassName={"page-link"}
                               pageCount={pageCount}
                               marginPagesDisplayed={2}
                               pageRangeDisplayed={5}
                               onPageChange={this.handlePageClick}
                               containerClassName={"pagination justify-content-center"}
                               activeClassName={"active"}
                               previousClassName={"page-item"}
                               nextClassName={"page-item"}
                               previousLinkClassName={"page-link"}
                               nextLinkClassName={"page-link"} />
        </div>
        );
    }

    handlePageClick = (data) => {
        let selected = data.selected;
        this.setState({
            page: selected
        })
    }
    getBooksPage = (offset, nextPageOffset) => {
        return this.props.books.map((term) => {
            return (
                <BookTerm term={term} key={term.bookId} onDelete={this.props.onDelete} onEdit={this.props.onEdit} onChangeAvailability = {this.props.onChangeAvailability}/>
            );
        }).filter( (book, index) => {
            return index >= offset && index < nextPageOffset;
        })
    }
}
export default Books;