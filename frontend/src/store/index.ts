import { configureStore } from "@reduxjs/toolkit";

import favoriteReducer from "./favoriteSlice";
import userReducer from "./userSlice";

const store = configureStore({
    reducer: {
        favorites: favoriteReducer,
        user: userReducer,
    },
});

store.subscribe(() => {
    localStorage.setItem("store", JSON.stringify(store.getState()));
});

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
