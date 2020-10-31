import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { uiReducer } from "./ui/uiReducer";
import { userReducer } from "./user/userReducer";

const persistorConfig = {
  key: "root",
  storage,
  whiteList: ["userReducer"],
  blacklist: ["uiReducer"],
};

const rootReducer = combineReducers({ ui: uiReducer, user: userReducer });

export default persistReducer(persistorConfig, rootReducer);
