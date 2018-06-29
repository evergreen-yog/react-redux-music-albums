import { combineReducers } from "redux";
import { albumsReducer } from "./features/Albums/ducks";

export const rootReducer = combineReducers({
  albums: albumsReducer
});
