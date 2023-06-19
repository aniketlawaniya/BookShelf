import { Link } from "react-router-dom";

export const Shelves = ({ shelves, setShelves }) => {
  const renderBook = (book, shelf) => {
    return (
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
          value={shelf}
          onChange={(e) => moveBookToShelf(book, e.target.value)}
        >
          <option value="" disabled>
            Move to
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
        </select>
      </li>
    );
  };

  const moveBookToShelf = (book, shelf) => {
    setShelves((prevShelves) => {
      const updatedShelves = { ...prevShelves };

      Object.keys(updatedShelves).forEach((key) => {
        updatedShelves[key] = updatedShelves[key].filter(
          (b) => b.id !== book.id
        );
      });

      updatedShelves[shelf] = [...updatedShelves[shelf], book];

      return updatedShelves;
    });
  };
  return (
    <div>
      <Link to="/search">
        <h3>Search Books</h3>
      </Link>
      <h1>My Library</h1>
      <h2>Currently Reading</h2>
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          flexWrap: "wrap"
        }}
      >
        {shelves.currentlyReading.map((book) =>
          book.id ? renderBook(book, "currentlyReading") : null
        )}
      </ul>

      <h2>Want to Read</h2>
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          flexWrap: "wrap"
        }}
      >
        {shelves.wantToRead.map((book) =>
          book.id ? renderBook(book, "wantToRead") : null
        )}
      </ul>

      <h2>Read</h2>
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          flexWrap: "wrap"
        }}
      >
        {shelves.read.map((book) =>
          book.id ? renderBook(book, "read") : null
        )}
      </ul>
    </div>
  );
};
