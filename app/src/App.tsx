import * as React from "react";

import api from "./api";

import "./styles.css";

const App = () => {
  const [jokes, setJokes] = React.useState([]);
  const [status, setStatus] = React.useState("init");

  function getJoke() {
    setStatus("pending");

    api
      .fetch()
      .then((joke) => {
        setJokes((jokes) => jokes.concat(joke));
        setStatus("resolved");
      })
      .catch(() => setStatus("rejected"));
  }

  return (
    <div className="App">
      <h1>Chuck Norris Jokes</h1>
      {jokes.length ? (
        <ul>
          {jokes.map((joke) => (
            <li key={joke.id}>{joke.value}</li>
          ))}
        </ul>
      ) : (
        <span>No jokes yet</span>
      )}
      <button disabled={status === "pending"} onClick={getJoke}>
        Fetch joke
      </button>
    </div>
  );
};

export default App;
