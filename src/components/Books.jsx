import "./styles/books.css";
import {useState,useEffect} from 'react';
import loadingGIF from "../assets/loading.gif";
import Book from "./Book";
import { useSelector } from "react-redux";

const Books = () => {
    const[initialBooks,setInitialBooks] = useState([]);
    const[loading,setLoading]= useState(false);
    const[filteredBooks,setFilteredBooks] = useState([]);
    const[loadMoreLoading,setLoadMoreLoading] = useState(false);
    const[showButton,setShowButton] = useState(false);
    const[booksAvailable,setBooksAvailable] = useState(0);
    let offset = 0;

    const filterText = useSelector((state) => state.filterText);
    const sortBy = useSelector((state) => state.sortBy);
    const search = useSelector((state) => state.search);

    useEffect(() => {
        setLoading(true);
        fetch("https://openlibrary.org/subjects/fantasy.json")
        .then(res => res.json())
        .then(result => {
            console.log(result.works);
            setLoading(false);
            setFilteredBooks(result.works);
            setInitialBooks(result.works);
        })
        .catch(err => alert(err));
    },[])

    useEffect(() => {
        setFilteredBooks(initialBooks.filter((book) => book.title.toLowerCase().includes(filterText.toLowerCase())));
    },[filterText])

    useEffect(() => {
        if(sortBy=="title"){
            console.log("Sorting by title");
            const sortedBooks = filteredBooks.sort((a,b) => a.title.localeCompare(b.title));
            setFilteredBooks([...sortedBooks]);
        }
        else if(sortBy=="author"){
            console.log("Sorting by Author");
            const sortedBooks = filteredBooks.sort((a,b) => {
                if(a.author_name){
                    return a.author_name[0].localeCompare(b.author_name[0]);
                }
                else{
                    return a.authors[0].name.localeCompare(b.authors[0].name);
                }
            });

            setFilteredBooks([...sortedBooks]);

        }
        else if(sortBy == "date"){
            console.log("Sorting by Date");
            const sortedBooks = filteredBooks.sort((a,b) => a.first_publish_year - b.first_publish_year);
            setFilteredBooks([...sortedBooks]);
        }
    },[sortBy])

    useEffect(() => {
        setLoading(true);
        offset = 0;
        fetch(`https://openlibrary.org/search.json?q=${search}&fields=key,title,author_name,cover_i,author_key,first_publish_year&offset=${offset}&limit=10`)
        .then(res => res.json())
        .then(result => {
            console.log(result);
            setLoading(false);
            setBooksAvailable(result.numFound);
            setFilteredBooks(result.docs);
            setInitialBooks(result.docs);
            if(result.numFound>10){
                setShowButton(true);
            }
            else{
                setShowButton(false);
            }
        })
        .catch(err => alert(err));
    },[search])

    const handleShowMore = () => {
        let limit = 10;
        offset +=10;
        if(booksAvailable - offset<10){
            limit = booksAvailable - offset;
            
        }
        setLoadMoreLoading(true);
        fetch(`https://openlibrary.org/search.json?q=${search}&fields=key,title,author_name,cover_i,author_key,first_publish_year&offset=${offset}&limit=${limit}`)
        .then(res => res.json())
        .then(result => {
            console.log(result.docs);
            setInitialBooks([...initialBooks,...result.docs]);
            setFilteredBooks([...filteredBooks,...result.docs]);
            setLoadMoreLoading(false);
            if(result.numFound - result.start<=10){
                setShowButton(false);
            }
            else{
                setShowButton(true);
            }
        })
        .catch(err => alert(err));

    }

    return(
        <>
        {loading ? <div className="loadingcontainer">
            <img src={loadingGIF} />
        </div> : <div className="bookscontainer">
            {filteredBooks.map((book) => <Book bookDetails={book} key={book.cover_id}/>)}
            </div>}
            <div className="showmorebtn">
                {(loadMoreLoading) ? <img src={loadingGIF} /> : showButton && <button onClick={handleShowMore}>Load More</button>};
            </div>
        </>
    )
}


export default Books;