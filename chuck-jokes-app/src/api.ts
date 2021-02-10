import { Joke } from "./types";

export default {
    fetch: (): Promise<Joke> =>
      fetch(`https://api.chucknorris.io/jokes/random`).then((res) => res.json())
  };