import { useEffect } from "react";
import {
  loadNeighborsByBorder,
  selectNeighbors,
} from "../store/features/details-slice";
import { useAppDispatch, useAppSelector } from "./redux";

export const useNeighbors = (borders: string[]) => {
  const dispatch = useAppDispatch();
  const neighbors = useAppSelector(selectNeighbors);

  useEffect(() => {
    if (borders.length) {
      dispatch(loadNeighborsByBorder(borders));
    }
  }, [borders, dispatch]);

  return neighbors;
};
