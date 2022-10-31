import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserStateType = { token: string | null };

const initialState: UserStateType = { token: null };

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        updateToken(state, action: PayloadAction<string | null>) {
            state.token = action.payload;
        },
    },
});

export default userSlice.reducer;
export const { updateToken } = userSlice.actions;
