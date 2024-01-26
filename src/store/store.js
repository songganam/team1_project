import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../redux/authSlice";
export default configureStore({
  reducer: {
    authSlice: authSlice,
  },
});
