import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./redux";
import { selectControls } from "../store/features/controls-slice";
import {
  loadCountries,
  selectCountriesInfo,
  selectVisibleCountries,
} from "../store/features/countries-slice";

export const useCountries = () => {
  const dispatch = useAppDispatch();
  const controls = useAppSelector(selectControls);
  const countries = useAppSelector((state) =>
    selectVisibleCountries(state, controls)
  );
  const { status, error, qty } = useAppSelector(selectCountriesInfo);

  useEffect(() => {
    if (!qty) {
      dispatch(loadCountries(qty));
    }
  }, [qty, dispatch]);

  return [countries, { status, error, qty }];
};
