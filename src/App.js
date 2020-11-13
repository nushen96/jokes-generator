import logo from "./logo.svg";
import Joke from "./components/Joke";
import React, { useState, useEffect } from "react";

function App() {
  // Jokes API: http://www.icndb.com/api/
  const apiURL = "http://api.icndb.com/jokes/random";
  const [joke, setJoke] = useState({});
  const [category, setCategory] = useState("");

  useEffect(() => {
    fetch(apiURL)
      .then((data) => data.json())
      .then((joke) => setJoke(joke));
  }, []);

  const updateCategory = (category) => {
    setCategory(category);
  };

  const fetchJoke = (category) => {
    fetch(category == "all" ? apiURL : apiURL + "?limitTo=[" + category + "]")
      .then((data) => data.json())
      .then((joke) => setJoke(joke));
  };

  console.log(joke);

  return (
    <div className="root-container">
      <h1 className="row main-title">Nushen's joke generator</h1>
      <div className="row actions-row">
        <select
          name="pets"
          id="pet-select"
          onChange={(e) => updateCategory(e.target.value)}
        >
          <option value="all" selected>
            All
          </option>
          <option value="nerdy">Nerdy</option>
          <option value="explicit">Explicit</option>
        </select>
        <button onClick={(e) => fetchJoke(category)}>Make me laugh! 😂</button>
      </div>
      <div className="row">
        <Joke
          jokeText={joke.value ? joke.value.joke : "No joke in that category"}
        />
      </div>
    </div>
  );
}

export default App;
