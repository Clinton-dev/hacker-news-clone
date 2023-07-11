import View from "../utils/view.js";
import Story from "../components/Story.js";
import baseUrl from "../utils/baseUrl.js";
import checkFavorites from "../utils/checkFavorites.js";
import store from "../store.js";

// For pages start with small case while for components start with Capital case

export default async function Stories(path) {
  let stories = null;
  let hasStories = false;
  let favorites = null;

  try {
    favorites = store.getState();
    stories = await getStories(path);
    hasStories = stories.length > 0;
  } catch (error) {
    console.error(error);
  }

  View.innerHTML = `<div>
    ${
      hasStories
        ? stories
            .map((story, index) =>
              Story({
                ...story,
                index: index + 1,
                isFavorite: checkFavorites(favorites, story),
              })
            )
            .join("")
        : "<div class='center-container'><img src='../images/notfound_thumbs_broken_404_icon.png'/> <h4 class='error'>No stories found, try later!!!</h4></div>"
    }
  </div>`;
}

async function getStories(path) {
  const isHomeRoute = path === "/";
  const isNewRoute = path === "/new";
  if (isHomeRoute) {
    path = "/news";
  } else if (isNewRoute) {
    path = "/newest";
  }

  const fullUrl = baseUrl + path;

  const response = await fetch(fullUrl);
  const stories = await response.json();

  return stories;
}

// https://node-hnapi.herokuapp.com

// / (Top) -> /news
// /new (New) -> /newest
// /ask (Ask) -> /ask
// /show (Show) -> /show
// /jobs (jobs) -> /jobs
