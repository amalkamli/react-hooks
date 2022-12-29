import { useState } from "react";
import { Routes, Route } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieList from "./Components/MovieList/MovieList";
import data from "./data";
import "./App.css";
import Search from "./Components/Search/Search";
import Add from "./Components/AddMovie/AddMovie";
import Details from "./Components/Details/Details";

function App() {
  const [Newdata, setNewdata] = useState(data);
  const [search, setSearch] = useState("");
  const [rating, setRating] = useState(0);
  const addMovie = (title, desc, rating, id, posterUrl, trailerSrc) => {
    setNewdata([
      ...Newdata,
      {
        title,
        description: desc,
        rating,
        id: Newdata.length + 1,
        posterUrl,
        trailerSrc,
      },
    ]);
  };
  return (
    <>
    <Search />
      <Routes> 
        <Route
          path="/"
          element={
            <MovieList
              data={Newdata.filter(
                (el) =>
                  el.title
                    ?.toLocaleLowerCase()
                    .includes(search.toLocaleLowerCase().trim()) &&
                  el.rating >= rating
              )}
            />
          }
        />
  <Route path="/details/:id" element={<Details data={Newdata} />} />

        <Route
          path="/add"
          element={<Add setSearch={setSearch} setRating={setRating} />}
        />
      </Routes>
    
    </>
  );
}
export default App;
