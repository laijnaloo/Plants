import {
  SET_IS_LOADING,
  SET_FIND_PLANTS,
  PlantActions,
} from "../actions/plantsActions";

export interface IPlant {
  name: string;
  type: string;
  images: string[];
  information: string;
  livingConditions: IPlantConditions;
  actions: IPlantActions;
}

export interface IPlantActions {
  water: string | undefined;
  nourish: string | undefined;
  replant: string | undefined;
}

export interface IPlantConditions {
  degrees: string | undefined;
  place: string;
  placeText: string | undefined;
}

export interface PlantsState {
  plants: IPlant[] | undefined;
  isError: boolean;
  isLoading: boolean;
}

export const initialState: PlantsState = {
  plants: undefined,
  isError: false,
  isLoading: false,
};

export default function plantsReducer(
  state: PlantsState = initialState,
  action: PlantActions
): PlantsState {
  switch (action.type) {
    case SET_FIND_PLANTS:
      return {
        ...state,
        plants: action.plants,
        isError: action.isError,
      };
    case SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    default:
      return state;
  }
}
