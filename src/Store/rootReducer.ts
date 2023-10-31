// rootReducer.ts
import { combineReducers } from "redux";
import itemsReducer from "../Reducers/itemsSlice";

const rootReducer = combineReducers({
  items: itemsReducer,
});

export default rootReducer;
