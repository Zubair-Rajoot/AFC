import { fetchUser } from "../utlis/fetchLocalStorage";

const userInfo = fetchUser();
export const initialState = {
    user: userInfo,
};
