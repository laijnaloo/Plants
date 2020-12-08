import { Dispatch } from "redux";
import { IPlant } from "../reducers/plantsReducers";
import { getPlants } from "../api/api";

export const SET_IS_LOADING = "SET_IS_LOADING";
export const SET_FIND_PLANTS = "SET_FIND_PLANTS";

export interface SetIsLoading {
  type: typeof SET_IS_LOADING;
  isLoading: boolean;
}

export interface SetFindPlants {
  type: typeof SET_FIND_PLANTS;
  plants: IPlant[];
  isError: boolean;
}

export type PlantActions = SetFindPlants | SetIsLoading;

export const setPlants = () => async (dispatch: Dispatch) => {
  dispatch<SetIsLoading>({
    type: "SET_IS_LOADING",
    isLoading: true,
  });

  dispatch<SetFindPlants>({
    type: "SET_FIND_PLANTS",
    plants: [],
    isError: false,
  });

  let plants = await getPlants();

  dispatch<SetFindPlants>({
    type: "SET_FIND_PLANTS",
    plants: plants.plants,
    isError: plants.isError,
  });

  dispatch<SetIsLoading>({
    type: "SET_IS_LOADING",
    isLoading: false,
  });
};
