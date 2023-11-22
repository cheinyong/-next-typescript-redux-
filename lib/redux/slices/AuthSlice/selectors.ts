import {ReduxState} from "@/lib/redux";


export const selectAuth = (state: ReduxState) => {
    return state.auth;
};
