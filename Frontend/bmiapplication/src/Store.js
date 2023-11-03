import { applyMiddleware,combineReducers,legacy_createStore} from "redux";
import { authReducer as authenication  } from "./Redux/Reducer";
import thunk from "redux-thunk"

const rootReducer = combineReducers({
    authenication 
});

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk));