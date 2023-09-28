import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import i18n from "@/shared/config/i18n/i18n";
import { User, userActions } from "@/entities/User";
import { USER_LOCAL_STORAGE_KEY } from "@/shared/const/localStorage";

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<
    User,
    LoginByUsernameProps,
    { rejectValue: string }
>("login/loginByUsername", async (loginData, thunkApi) => {
    try {
        const response = await axios.post(
            "http://localhost:8000/login",
            loginData
        );

        if (!response.data) throw new Error();

        localStorage.setItem(
            USER_LOCAL_STORAGE_KEY,
            JSON.stringify(response.data)
        );
        thunkApi.dispatch(userActions.setLoginData(response.data));

        return response.data;
    } catch (e) {
        return thunkApi.rejectWithValue(i18n.t("login_incorrect"));
    }
});
