export default {
  fetch: () =>
    fetch(`https://api.chucknorris.io/jokes/random`).then((res) => res.json())
};
