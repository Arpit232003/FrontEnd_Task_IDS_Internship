import "./styles/navbar.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addFilterText,addSortBy, addSearch } from "../slices/slice";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
    const [search,setSearch] = useState("");
    const [filterText,setFilterText] = useState("");
    const [sortBy,setSortBy] = useState("title");
    const [toggle,setToggle] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSearch = (e) => {
        console.log(e.target.value);
        setSearch(e.target.value);
    }

    const handleSortBy = (e) => {
        console.log(e.target.value);
        setSortBy(e.target.value);
    }

    const handleFilterText = (e) => {
        // console.log(e.target.value);
        // setFilterText(e.target.value);
        dispatch(addFilterText(e.target.value));
    }

    const clickSortBy = () => {
        dispatch(addSortBy(sortBy));
    }

    const clickSearch = () => {
        dispatch(addSearch(search));
    }

    return(
        <>
        <div className="hamburgermenu">
            <div className="menu" onClick={()=> setToggle(!toggle)}>
            <span className={toggle ? "active" : "notactive"}></span>
            <span className={toggle ? "active" : "notactive"}></span>
            <span className={toggle ? "active" : "notactive"}></span>
            </div>
            <div className="hambookbtn">
            <button onClick={() => navigate("/cart")}>My Books</button>
            </div>
        </div>
        <div className={toggle ? "navbarcontainer navactive" : "navbarcontainer"}>
            <div className="mainsearch">
                <div className="logo">
                    <p>BookVerse</p>
                    <span id="close" onClick={()=> setToggle(!toggle)}>X</span>
                </div>
                <div className="search">
                    <input type="text" placeholder="search here" onChange={handleSearch}/>
                    <button onClick={clickSearch}>Search</button>
                </div>
                <div className="bookbtn">
                    <button onClick={() => navigate("/cart")}>My Books</button>
                </div>
            </div>
            <div className="filters">
                <div className="inputtext">
                    <span>Filter: </span>
                    <input type="text" placeholder="Filter Title" onChange={handleFilterText}/>
                </div>
                <div className="sorting">
                    <span>Sort By: </span>
                    <select onChange={handleSortBy}>
                        <option value="title">Title</option>
                        <option value="author">Author</option>
                        <option value="date">Publish Date</option>
                    </select>
                    <button onClick={clickSortBy}>Sort</button>
                </div>
            </div>
        </div>
        </>
    )
}


export default Navbar;