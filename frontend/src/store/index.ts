import { configureStore } from "@reduxjs/toolkit";

import favoriteReducer from "./favoriteSlice";

const store = configureStore({
    reducer: {
        favorites: favoriteReducer,
    },
});

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
