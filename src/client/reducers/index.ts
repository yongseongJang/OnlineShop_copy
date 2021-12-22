import { combineReducers } from "redux";
import { signUpReducer } from "./signUpReducer";
import { loginReducer } from "./loginReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["loginReducer"],
};

const rootReducer = combineReducers({ loginReducer, signUpReducer });

export default persistReducer(persistConfig, rootReducer);
