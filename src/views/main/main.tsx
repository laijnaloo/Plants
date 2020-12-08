import React, { useEffect } from "react";

import "./main.scss";
import { useDispatch, useSelector } from "react-redux";
import { PlantGallery } from "../../components/plantGallery/plantGallery";
import { setPlants } from "../../actions/plantsActions";
import { RootReducer as RootState } from "../..";
import { stat } from "fs";
import { IPlantGallery } from "../../components/plantGallery/plantGallery";

function mapStateToProps(state: RootState) {
  return {
    plants: state.plantReducer.plants,
    isError: state.plantReducer.isError,
    isLoading: state.plantReducer.isLoading,
  };
}

export function Main() {
  const state = useSelector(mapStateToProps);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPlants());
  }, [dispatch]);

  console.log("state", state.plants);
  return (
    <div className="mainContainer">
      <div className="header">
        <h1>Plants</h1>
      </div>
      <div className="content">
        <div className="intro">
          <h2 className="darkText">Welcome back!</h2>
          <p className="lightText"> What do you want to do?</p>
        </div>

        {state.plants && (
          <div className="galleryContainer">
            {state.plants.map((plant, index) => (
              <PlantGallery image={plant.images[0]} index={index} />
            ))}
          </div>
        )}
        {!state.plants && <div> No results found </div>}
      </div>
    </div>
  );
}
