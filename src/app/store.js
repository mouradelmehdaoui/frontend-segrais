import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import distributionReducer from "../features/distributionSlice";

export default configureStore({
  reducer: {
    auth: authReducer,
    distribution: distributionReducer
  }
});
