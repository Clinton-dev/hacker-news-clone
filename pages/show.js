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

  document.querySelectorAll(".favorite").forEach((favoriteBtn) => {
    favoriteBtn.addEventListener("click", function () {
      // parse json object obtained from data-story
      const favorite = JSON.parse(decodeURIComponent(this.dataset.story));
      const isFavorited = checkFavorites(favorites, favorite);
      // Add to global favorites store using reducer function
      store.dispatch({
        type: isFavorited ? "REMOVE_FAVORITE" : "ADD_FAVORITE",
        payload: { favorite },
      });
      // rerender show page
      Show(path);
    });
  });
}

async function getShows(path) {
  const url = baseUrl + path;

  const response = await fetch(url);
  const shows = await response.json();
  return shows;
}
