import { StateSchema } from "@/app/providers/StoreProvider";

export const getLoginData = (state: StateSchema) => state?.user.loginData;
