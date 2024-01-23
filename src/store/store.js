import { configureStore } from "@reduxjs/toolkit";
import signinSlice from "../redux/signinSlice";
export default configureStore({
  reducer: {
    signinSlice: signinSlice,
  },
});
