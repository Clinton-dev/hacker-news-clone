import view from "../utils/view.js";
import store from "../store.js";
import Story from "../components/Story.js";
import checkFavorites from "../utils/checkFavorites.js";

export default function Favorites() {
  const { favorites } = store.getState();
  const hasFavorite = favorites.length > 0;

  view.innerHTML = `<div>
    ${
      hasFavorite
        ? favorites
            .map((story) =>
              Story({ ...story, isFavorite: checkFavorites(favorites, story) })
            )
            .join("")
        : "<div class='center-container'><img id='unhappy-icon' src='../images/unhappy_crying_icon.png'/><p>You have no News favorites, plz add some!!!<p></div>"
    }
  </div>`;

  document.querySelectorAll(".favorite").forEach((favoriteButton) => {
    favoriteButton.addEventListener("click", function () {
      const story = JSON.parse(this.dataset.story);
      const isFavorited = checkFavorites(favorites, story);
      store.dispatch({
        type: isFavorited ? "REMOVE_FAVORITE" : "ADD_FAVORITE",
        payload: { favorite: story },
      });
      Favorites();
    });
  });
}
