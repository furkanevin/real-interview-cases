import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Movie } from '../types/movie';

interface FavoritesState {
  movies: Movie[];
}

export const FAVORITES_STORAGE_KEY = 'favoriteMovies';

const loadFavorites = (): Movie[] => {
  try {
    return JSON.parse(localStorage.getItem(FAVORITES_STORAGE_KEY) || '[]');
  } catch {
    return [];
  }
};

const initialState: FavoritesState = {
  movies: loadFavorites(),
};

// Reducer'lar saftır; localStorage'a yazma işi store.ts içindeki subscribe'da yapılır

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<Movie>) => {
      const alreadyAdded = state.movies.some((movie) => movie.id === action.payload.id);
      if (!alreadyAdded) state.movies.push(action.payload);
    },
    removeFromFavorites: (state, action: PayloadAction<number>) => {
      state.movies = state.movies.filter((movie) => movie.id !== action.payload);
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer; 