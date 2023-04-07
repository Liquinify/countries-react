import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./redux";
import {
  cleanDetails,
  loadCountryByName,
  selectDetails,
} from "../store/features/details-slice";

export const useDetails = (name: string) => {
  const dispatch = useAppDispatch();
  const details = useAppSelector(selectDetails);

  useEffect(() => {
    dispatch(loadCountryByName(name));

    return () => {
      dispatch(cleanDetails());
    };
  }, [name, dispatch]);

  return details;
};
