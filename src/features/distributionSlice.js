import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://backend-segrais.onrender.com/api/distribution";

// fetch all
export const fetchDistributions = createAsyncThunk("distribution/fetch", async () => {
  const res = await axios.get(API_URL);
  return res.data;
});

// delete
export const deleteDistribution = createAsyncThunk("distribution/delete", async id => {
  await axios.delete(`${API_URL}/${id}`);
  return id;
});

// create
export const createDistribution = createAsyncThunk(
  "distribution/create",
  async (data) => {

    console.log(data);
    
    const res = await axios.post(API_URL, data);
    return res.data;
  }
);

// update
export const updateDistribution = createAsyncThunk(
  "distribution/update",
  async ({ id, data }) => {
    const res = await axios.put(`${API_URL}/${id}`, data);
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
