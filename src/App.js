import logo from "./logo.svg";
import Joke from './components/Joke'

function App() {
  return (
    <div className="root-container">
      <h1 className="row main-title">Nushen's joke generator</h1>
      <div className="row actions-row">
        <select name="pets" id="pet-select">
          <option value="all" selected>All</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="hamster">Hamster</option>
          <option value="parrot">Parrot</option>
          <option value="spider">Spider</option>
          <option value="goldfish">Goldfish</option>
        </select>
        <button>Make me laugh</button>
      </div>
      <div className="row">
          <Joke/>
        </div>
    </div>
  );
}

export default App;
