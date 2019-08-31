import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Field, withFormik } from "formik";
 
const Search = () =>{

    const [items, setItems] = useState([]);
    
    const [category, setCategory] = useState("");

    const [search, setSearch] =useState("");

    let searchList = [];
  
  
    useEffect(() => {
      axios
        .get("https://lambda-wedding-planner.herokuapp.com/api/posts/all")
        .then(resolve => setItems(resolve.data))
        .catch(error => console.log("omuhgawd > ", error));
    }, []);

    const handleSubmit = e => {

        e.preventDefault();

        setSearch(e.target.value)

        items.map((item, i)=>{
            searchList[i]= item[category].toLowerCase();
        });

        console.log(searchList.findIndex(element => element.includes(search.search)))
        console.log(searchList)
        console.log(search)
        console.log(category)

        // var couple=

    };

    const changeHandler = e =>{setCategory(e.target.value);};

    const searchBarHandler = e => {setSearch({[e.target.name]:e.target.value})};

    return(
        <div>
            
            <form onSubmit={handleSubmit}>
                <select onChange={changeHandler}>
                    <option>Search Category</option>
                    <option value="couple_name">Couple's Name</option>
                    <option value="wedding_date">Wedding Date</option>
                    <option value="wedding_location">Wedding Location</option>
                    <option value="wedding_photographer">Wedding Photographer</option>
                    <option value="wedding_theme">Wedding Theme</option>
                </select>
                <input
                    type="text"
                    name="search"
                    placeholder="Search for..."
                    onChange={searchBarHandler}
                />
                <button type="submit">search</button>
            </form>
        </div>
    )
};

export default Search