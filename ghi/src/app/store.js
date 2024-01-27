import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import searchReducer from './searchSlice';
import { pokemonApi } from './apiSlice';


export const store = configureStore({
  reducer: {
    search: searchReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(pokemonApi.middleware)
})

setupListeners(store.dispatch)
