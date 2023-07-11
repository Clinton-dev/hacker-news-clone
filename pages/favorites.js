import view from "../utils/view.js";

export default function Favorites() {
    getFavorites()
  view.innerHTML = `<div>favorites page</div>`;
}

function getFavorites() {
    // Get favorites from global scope
}
