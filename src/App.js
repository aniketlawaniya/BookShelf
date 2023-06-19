import "./styles.css";
import { Routes, Route } from "react-router-dom";
import { SearchPage } from "./SearchPage";
import { Shelves } from "./Shelves";
import React, { useState } from "react";

export default function App() {
  const [shelves, setShelves] = useState({
    currentlyReading: [],
    wantToRead: [],
    read: []
  });
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<Shelves shelves={shelves} setShelves={setShelves} />}
        />
        <Route
          path="/search"
          element={<SearchPage shelves={shelves} setShelves={setShelves} />}
        />
      </Routes>
    </div>
  );
}
