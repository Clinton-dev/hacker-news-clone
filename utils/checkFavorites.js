export default function checkFavorites(favorites, story) {
  // if (Array.isArray(favorites)) return false;
  return favorites.some((favorite) => favorite.id === story.id);
}
