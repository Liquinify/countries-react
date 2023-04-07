import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ICountries } from "../../models/ICountries";
import { RootState } from "../store";

type DetailsState = {
  currentCountry: ICountries | null;
  neighbors: string[];
  status: "loading" | "received" | "rejected";
  error: string | null;
}

const initialState = {
  currentCountry: null,
  neighbors: [],
  status: "idle",
  error: null,
};

export const loadCountryByName = createAsyncThunk(
  "details/load-country-by-name",
  (name: string, { extra: { client, api } }) => {
    return client.get(api.searchByCountry(name))
  }
);

export const loadNeighborsByBorder = createAsyncThunk(
  "details/load-neighbors",
  (borders: string[], { extra: { client, api } }) => {
    return client.get(api.filterByCode(borders));
  }
);

const detailsSlice = createSlice({
  name: "details",
  initialState,
  reducers: {
    cleanDetails: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadCountryByName.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(loadCountryByName.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload as string || action.meta.error;
      })
      .addCase(loadCountryByName.fulfilled, (state, action) => {
        state.status = "received";
        state.currentCountry = action.payload.data[0];
      })
      .addCase(loadNeighborsByBorder.fulfilled, (state, action) => {
        state.neighbors = action.payload.data.map((country: ICountries) => country.name);
      });
  },
});

export const { cleanDetails } = detailsSlice.actions;
export const detailsReducer = detailsSlice.reducer;

// selectors

export const selectCurrentCountry = (state: RootState) => state.details.currentCountry;
export const selectDetails = (state: RootState) => state.details;
export const selectNeighbors = (state: RootState) => state.details.neighbors;