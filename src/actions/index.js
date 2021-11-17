import ACTION_TYPES from "./actionTypes";

export const authLogin = (data) => {
    return {
        type: ACTION_TYPES.REQUEST,
        data: data,
    }
}

export const authClear = () => {
    return {
        type: ACTION_TYPES.CLEAR,
    }
}