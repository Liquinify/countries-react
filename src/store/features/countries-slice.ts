import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ICountries } from "../../models/ICountries";
import { RootState } from "../store";

export const loadCountries = createAsyncThunk(
  "@@countries/load-countries",
  (_: unknown, { extra: { client, api } }) => {
    return client.get(api.ALL_COUNTRIES);
  }
);

const initialState = {
  status: "idle",
  error: null,
  list: [],
};

const countrySlice = createSlice({
  name: "@@countries",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadCountries.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(loadCountries.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload || action.meta.error;
      })
      .addCase(loadCountries.fulfilled, (state, action) => {
        state.status = "received";
        state.list = action.payload.data;
      });
  },
});

export const countryReducer = countrySlice.reducer;

// selectors
export const selectCountriesInfo = (state: RootState) => ({
  status: state.countries.status,
  error: state.countries.error,
  qty: state.countries.list.length,
});

export const selectAllCountries = (state: RootState) => state.countries.list;
export const selectVisibleCountries = (state: RootState, { search = "", region = "" }) => {
  return state.countries.list.filter(
    (country: ICountries) =>
      country.name.toLowerCase().includes(search.toLowerCase()) &&
      country.region.includes(region)
  );
};
