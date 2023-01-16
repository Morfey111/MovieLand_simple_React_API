import "./App.css";
import searchicon from "./search.svg";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

function App() {
  // api key 29d61529

  const API_MOVIES_URL = "http://www.omdbapi.com?apikey=29d61529";

  const [movies, setMovies] = useState([]);
  const [search , setSearch] = useState('')


  const dataFromApi = async (title) => {
    const response = await fetch(`${API_MOVIES_URL}&s=${title}`);
    const data = await response.json();
    console.log(data)
    setMovies(data.Search);
  };

  useEffect(() => {
    dataFromApi('superman');
  },[]);

  return (
    <div className="app">
      <h1>MovieLand .</h1>

      <div className="search">
        <input
          placeholder="Search movie"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <img src={searchicon} alt="search" onClick={() => {
           dataFromApi(search)
        }} />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => {
            return <MovieCard movie={movie} />;
          })}
        </div>
      ) : (
        <div className="empty">
          {" "}
          <h2>No Movie found</h2>
        </div>
      )}

    </div>
  );
}

export default App;



