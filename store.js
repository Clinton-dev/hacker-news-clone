// Handle global State

const initialState = {
  favorites: [],
};

function createStore(reducer) {
  let currentState = reducer(initialState, {});

  return {
    getState: () => currentState,
    dispatch: (action) => {
      currentState = reducer(currentState, action);
    },
  };
}

function addFavoritesReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_FAVORITE": {
      const addedFavorite = action.payload.favorite;
      const favorites = [...state.favorites, addedFavorite];
      return { favorites };
    }
    case "REMOVE_FAVORITE": {
      const removedFavorite = action.payload.favorite;
      const favorites = [
        ...state.favorites.filter(
          (favorite) => favorite.id !== removedFavorite.id
        ),
      ];
      return { favorites };
    }
    default:
      return state;
  }
}

let action = {
  type: "ADD_FAVORITE",
  payload: { favorite: { title: "You were confirmed!!!", id: 1 } },
};

let deleteAction = {
  type: "REMOVE_FAVORITE",
  payload: { favorite: { title: "You were confirmed!!!", id: 1 } },
};

const store = createStore(addFavoritesReducer);

export default store;
