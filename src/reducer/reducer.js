import { combineReducers } from "redux";
import userReducer from "./userReducer";
import movieReducer from "./movieReducer";


export default combineReducers({
      movieReducer,
      userReducer  
})