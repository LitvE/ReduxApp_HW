import { combineReducers } from "redux";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
    authReducerStates: authReducer,
});

export default rootReducer;