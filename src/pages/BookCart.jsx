import { useSelector } from "react-redux";
import BookInCart from "../components/BookInCart";
import "./styles/cart.css";
import { useNavigate } from "react-router-dom";
const BookCart = () => {
    const addedBooks = useSelector((state) => state.addedBooks);
    const navigate = useNavigate();

    return(
        <>
        <div className="heading">
            <p>My Books</p>
        </div>
        <div className="backbtn">
            <button onClick={() => navigate("/")}>&larr;</button>
        </div>
        <div className="booksincartcontainer">
            {addedBooks.length ==0 ? <div className="emptycart">
                <p>No Books added</p>
            </div> : addedBooks.map((book) => <BookInCart bookDetails={book}/>)}
        </div>
        </>
    )
}

export default BookCart;