import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


// fetch all
export const fetchDistributions = createAsyncThunk("distribution/fetch", async () => {
  const res = await axios.get("https://backend-segrais.onrender.com/api/distribution");
  return res.data;
});

// delete
export const deleteDistribution = createAsyncThunk("distribution/delete", async id => {
  await axios.delete(`${"https://backend-segrais.onrender.com/api/distribution"}/${id}`);
  return id;
});

// create
export const createDistribution = createAsyncThunk(
  "distribution/create",
  async (data) => {
    const res = await axios.post("https://backend-segrais.onrender.com/api/distribution", data);
    return res.data;
  }
);

// update
export const updateDistribution = createAsyncThunk(
  "distribution/update",
  async ({ id, data }) => {
    const res = await axios.put(`${"https://backend-segrais.onrender.com/api/distribution"}/${id}`, data);
    return res.data;
  }
);

const distributionSlice = createSlice({
  name: "distribution",
  initialState: { list: [] },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDistributions.fulfilled, (state, action) => {
        state.list = action.payload;
      })
      .addCase(deleteDistribution.fulfilled, (state, action) => {
        state.list = state.list.filter(d => d._id !== action.payload);
      })
      .addCase(createDistribution.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })
      .addCase(updateDistribution.fulfilled, (state, action) => {
        state.list = state.list.map(d => (d._id === action.payload._id ? action.payload : d));
      });
  }
});

export default distributionSlice.reducer;
