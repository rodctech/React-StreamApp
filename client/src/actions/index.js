import {SIGN_IN, SIGN_OUT} from "./types";

//Action Creator
export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    };
};

//Action Creator
export const signOut = () => {
    return {
        type: SIGN_OUT
    };
};
