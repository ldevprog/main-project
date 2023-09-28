import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User, UserSchema } from "../types/user";
import { USER_LOCAL_STORAGE_KEY } from "@/shared/const/localStorage";

const initialState: UserSchema = {
    loginData: null,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        initLoginData: (state) => {
            const user = localStorage.getItem(USER_LOCAL_STORAGE_KEY);
            if (user) {
                state.loginData = JSON.parse(user);
            }
        },
        setLoginData: (state, action: PayloadAction<User>) => {
            state.loginData = action.payload;
        },
        clearLoginData: (state) => {
            state.loginData = null;
            localStorage.removeItem(USER_LOCAL_STORAGE_KEY);
        },
    },
});

export const { actions: userActions, reducer: userReducer } = userSlice;
