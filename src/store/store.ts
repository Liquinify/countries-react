import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { controlsReducer } from "./features/controls-slice";
import { themeReducer } from "./features/theme-slice";
import axios from "axios";
import * as api from "../api/api";
import { countryReducer } from "./features/countries-slice";
import { detailsReducer } from "./features/details-slice";

export const rootReducer = combineReducers({
  theme: themeReducer,
  controls: controlsReducer,
  countries: countryReducer,
  details: detailsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      thunk: {
        extraArgument: {
          client: axios,
          api,
        },
      },
    }),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore["dispatch"];
