import { configureStore } from '@reduxjs/toolkit';
import { movieApi } from '../features/movieApi';
import favoritesReducer, { FAVORITES_STORAGE_KEY } from '../features/favoritesSlice';

export const store = configureStore({
  reducer: {
    [movieApi.reducerPath]: movieApi.reducer,
    favorites: favoritesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(movieApi.middleware),
});

// Favoriler değiştikçe localStorage'a yazılır
let previousFavorites = store.getState().favorites.movies;
store.subscribe(() => {
  const { movies } = store.getState().favorites;
  if (movies !== previousFavorites) {
    previousFavorites = movies;
    localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(movies));
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
