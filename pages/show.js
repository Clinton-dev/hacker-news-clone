import view from "../utils/view.js";
import Story from "../components/Story.js";
import baseUrl from "../utils/baseUrl.js";
import checkFavorites from "../utils/checkFavorites.js";
import store from "../store.js";

export default async function Show(path) {
  const shows = await getShows(path);
  const hasShows = shows.length > 0;
  const { favorites } = store.getState();

  view.innerHTML = `<div>
    ${
      hasShows
        ? shows
            .map((show) =>
              Story({ ...show, isFavorite: checkFavorites(favorites, show) })
            )
            .join("")
        : ""
    }
  </div>`;
}

async function getShows(path) {
  const url = baseUrl + path;

  const response = await fetch(url);
  const shows = await response.json();
  return shows;
}
