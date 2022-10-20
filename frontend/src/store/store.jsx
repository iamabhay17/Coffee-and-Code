import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import {
  createJobReducer,
  jobDeleteReducer,
  jobsListReducer,
} from "./reducers/dataReducer";
import { userLoginReducer, userRegisterReducer } from "./reducers/userReducer";

const reducer = combineReducers({
  jobList: jobsListReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  createJob: createJobReducer,
  jobDelete: jobDeleteReducer,
});

const initialState = {};

const store = configureStore({
  initialState,
  reducer,
});

export default store;
