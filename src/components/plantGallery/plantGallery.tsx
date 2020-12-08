import React from "react";

import "./plantGallery.scss";

export interface IPlantGallery {
  image: string;
  index: number;
}

export function PlantGallery(props: IPlantGallery) {
  return (
    <button className="galleryItem" key={props.index}>
      <img src={process.env.PUBLIC_URL + props.image} />
    </button>
  );
}
