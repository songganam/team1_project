import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "../redux/loginSlice";
export default configureStore({
  reducer: {
    loginSlice: loginSlice,
  },
});
