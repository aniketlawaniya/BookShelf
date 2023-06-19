import React, { useState } from "react";
import { books } from "./bookDB";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";

export const SearchPage = ({ shelves, setShelves }) => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const searchBooks = (query) => {
    const results = books.filter((book) =>
      book.title.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(results);
  };

  const addBookToShelf = (book, shelf) => {
    setShelves((prevShelves) => {
      const updatedShelves = { ...prevShelves };
      updatedShelves[shelf] = [...updatedShelves[shelf], book];
      return updatedShelves;
    });
  };
  return (
    <div>
      <h1>Search Books</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "normal",
          alignItems: "center"
        }}
      >
        <Link to="/">
          <IoMdArrowRoundBack style={{ fontSize: "30px" }} />
        </Link>
        <h1>{query}</h1>
      </div>
      <input
        type="text"
        placeholder="Search books..."
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          searchBooks(e.target.value);
        }}
      />

      <ul
        style={{
          listStyle: "none",
          display: "flex",
          flexWrap: "wrap"
        }}
      >
        {searchResults.map((book) => (
          <li
            key={book.id}
            style={{
              display: "flex",
              flexDirection: "column",
              border: "1px solid black",
              width: "200px",
              marginTop: "10px",
              marginRight: "10px"
            }}
          >
            <img
              src={book.image}
              alt={book.title}
              style={{ height: "200px", width: "200px" }}
            />
            <p style={{ marginTop: "0px" }}>{book.title}</p>
            <small style={{ marginTop: "0px" }}>{book.author}</small>
            <select
              defaultValue=""
              onChange={(e) => addBookToShelf(book, e.target.value)}
            >
              <option value="" disabled>
                Add to Shelf
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
            </select>
          </li>
        ))}
      </ul>
    </div>
  );
};
