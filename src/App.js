import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { starwarsdetail, getrandomjoke } from "./reduxcomponent";
import './App.css';

function App() {
  const s = useSelector(state => state)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <h2 className="title">Redux fetch API project  </h2>
      {s !== undefined && Object.keys(s).length > 4 ?
        <div>
          <h3>Star Wars Character</h3>
          <p>Name: {s.name}</p>
          <p>Height: {s.height}</p>
          <p>Mass: {s.mass}</p>
          <p>Birth Year: {s.birth_year}</p>
          <p>Gender: {s.gender}</p>
        </div> :
        s !== undefined && Object.keys(s).length == 4 ?
          <div>
            <h3>Random Joke</h3>
            <p>Type: {s.type}</p>
            <p>Question: {s.setup}</p>
            <p>Punchline: {s.punchline}</p>
          </div> :
          <div>
            <h1>Click the button to see changes</h1>
            <p>It is a redux based project. The libraries used are react-redux, redux, redux-thunk.</p>
            <p>This project is a demonstration of how redux works and how we can apply it in large projects.</p>
          </div>}

      <button className="btn" onClick={() => dispatch(starwarsdetail())}>Star Wars</button>
      <button className="btn" onClick={() => dispatch(getrandomjoke())}>Random Joke</button>

      <p><a href="https://github.com/Kurosakicoder/ReduxBasic">Github Link</a></p>
    </div>
  );
}

export default App;
