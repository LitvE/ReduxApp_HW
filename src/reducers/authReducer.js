import ACTION_TYPES from "../actions/actionTypes";

const initialState = {
    isFetching: false,
    error: {
        errorNumber: 0,
        erroType: '',
    }
}

const authReducer = (state = initialState, action) => {
    switch(action.type){
        case ACTION_TYPES.REQUEST: {
            return {
                ...state,
                isFetching: true,
            }
        }
        // case ACTION_TYPES.SUCCESS: {};
        // case ACTION_TYPES.ERROR: {};
        case ACTION_TYPES.CLEAR: { return {state: initialState}}
        default: return state;
    }
}

export default authReducer;