import {SIGN_IN, SIGN_OUT} from "./types";

//Action Creator
export const signIn = () => {
    return {
        type: SIGN_IN
    };
};

//Action Creator
export const signOut = () => {
    return {
        type: SIGN_OUT
    };
};
