import view from "../utils/view.js";
import store from "../store.js";
import Story from "../components/Story.js";

export default function Favorites() {
  const { favorites } = store.getState();
  const hasFavorite = favorites.length > 0;

  view.innerHTML = `<div>
    ${
      hasFavorite
        ? favorites.map((favorite) => Story(favorite)).join("")
        : "<div class='center-container'><img id='unhappy-icon' src='../images/unhappy_crying_icon.png'/><p>You have no News favorites<p></div>"
    }
  </div>`;
}
