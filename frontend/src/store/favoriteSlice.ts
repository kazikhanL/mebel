import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPromoCard } from "@interfaces/ICard";

type FavoriteStateType = { cards: IPromoCard[] };

const initialState: FavoriteStateType = {
    cards: [],
};

const favoriteSlice = createSlice({
    name: "favorite",
    initialState,
    reducers: {
        addFavorite(state, action: PayloadAction<IPromoCard>) {
            state.cards.push(action.payload);
        },

        deleteFavorite(state, action: PayloadAction<number>) {
            const NOT_FOUND_POSS = -1;
            const index = state.cards.findIndex((card) => card.id === action.payload);

            if (index === NOT_FOUND_POSS) return;

            state.cards.splice(index, 1);
        },
    },
});

export default favoriteSlice.reducer;
export const { addFavorite, deleteFavorite } = favoriteSlice.actions;
