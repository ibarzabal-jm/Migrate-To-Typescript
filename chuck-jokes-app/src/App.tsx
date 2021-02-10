import React from "react";
import "./App.css";
import api from "./api";
import { Joke, Status } from "./types";

const App = () => {
  const [jokes, setJokes] = React.useState<Joke[]>([]);
  const [status, setStatus] = React.useState<Status>(Status.Init);

  function getJoke() {
    setStatus(Status.Pending);

    api
      .fetch()
      .then((joke) => {
        setJokes((jokes) => jokes.concat(joke));
        setStatus(Status.Resolved);
      })
      .catch(() => setStatus(Status.Rejected));
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
      <button disabled={status === Status.Pending} onClick={getJoke}>
        Fetch joke
      </button>
    </div>
  );
};

export default App;
