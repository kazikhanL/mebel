import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IStoreCard, IPromoCard } from "@interfaces/ICard";

type CartStateType = { cards: IStoreCard[] };

const initialState: CartStateType = {
    cards: [],
};

const NOT_FOUND_POSSITION = -1;

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<IPromoCard>) {
            state.cards.push({ ...action.payload, count: 1 });
        },

        updateCartCard(state, action: PayloadAction<IStoreCard>) {
            const index = state.cards.findIndex((card) => card.id === action.payload.id);

            if (index === NOT_FOUND_POSSITION) return;

            state.cards[index].count = action.payload.count;
        },

        deleteFromCart(state, action: PayloadAction<number>) {
            const index = state.cards.findIndex((card) => card.id === action.payload);

            if (index === NOT_FOUND_POSSITION) return;

            state.cards.splice(index, 1);
        },

        addCartCardsFromLocalStore(state, action: PayloadAction<IStoreCard[]>) {
            state.cards = action.payload;
        },
    },
});

export default cartSlice.reducer;
export const { addToCart, deleteFromCart, updateCartCard, addCartCardsFromLocalStore } = cartSlice.actions;
