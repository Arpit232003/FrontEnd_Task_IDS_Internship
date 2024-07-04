import "./styles/book.css";
import { useDispatch } from "react-redux";
import { addBook } from "../slices/slice";
const Book = (props) => {
    const dispatch = useDispatch();
    const {authors,cover_id, first_publish_year, title,cover_i,author_name} = props.bookDetails;
    
    return(
        <div className="bookcontainer">
            <div className="image">
                <img src={`https://covers.openlibrary.org/b/id/${cover_i?cover_i:cover_id}-M.jpg`} />
            </div>
            <p>{title}</p>
            <div className="authors">
                {(author_name !=undefined ) ? author_name.map((author) => <span>{author}, </span>) : authors.map((author) => <span>{author.name}, </span>)}
            </div>
            <div className="published">
                <span>Published At:</span> <span id="year">{first_publish_year}</span>
            </div>
            <div className="addbtn">
                <button onClick ={() => dispatch(addBook({authors,cover_id, first_publish_year, title,cover_i,author_name}))}>Add Book</button>
            </div>
        </div>
    )
}

export default Book;