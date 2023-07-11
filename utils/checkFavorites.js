export default function checkFavorites(favorites, story) {
  return favorites.some((favorite) => favorite.id === story.id);
}
