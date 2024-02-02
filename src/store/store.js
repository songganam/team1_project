import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../redux/authSlice";
import refreshReducer from "../redux/refreshSlice";
export default configureStore({
  reducer: {
    authSlice: authSlice,
    refresh: refreshReducer,
  },
});
