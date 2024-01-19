import React from "react";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const loginPostAsync = createAsyncThunk(
  "loginPostAsync",
  async ({ loginParam, successFn, failFn, errorFn }) => {
    try {
      // //   const res = await loginPost({ loginParam, successFn, failFn, errorFn });
      //   return res;
    } catch (error) {
      return error;
    }
  },
);
const loginSlice = () => {
  return <div>loginSlice</div>;
};

export default loginSlice;
