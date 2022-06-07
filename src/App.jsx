import { useState, useEffect } from "react";

import "./App.css";
import Wordle from "./components/Wordle";

function App() {
  const [solution, setSolution] = useState(null);

  useEffect(() => {
    getData();
  }, [setSolution]);

  const getData = async () => {
    const response = await fetch(
      "https://my-wordle-api.herokuapp.com/solutions"
    );
    const data = await response.json();
    const randomSolution = data[Math.floor(Math.random() * data.length)];
    setSolution(randomSolution.word);
  };

  return (
    <div className="App">
      <h1>Wordle</h1>
      {solution && <Wordle solution={solution} />}
    </div>
  );
}

export default App;
