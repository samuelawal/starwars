import { STAR_WARS_API_URL } from "./constants";

export const fetchData = async (url) => await fetch(url);

export async function fetchMovies() {
  const results = await fetchData(`${STAR_WARS_API_URL}/films`);
  const data = await results.json();
  console.log(data.results);
  return data.results;
}

export function fetchCharacters(urls) {
  return Promise.all(
    urls.map(async (url) => {
      const { name, gender, height } = await fetchData(url);
      const character = { name, gender, height };
      return character;
    })
  );
}
