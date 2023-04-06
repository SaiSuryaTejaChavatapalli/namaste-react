import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantMenu = () => {
  const params = useParams();
  // const [restaurants, setRestaurants] = useState(null);
  const { resId } = params;
  const restaurants = useRestaurantMenu(resId);

  return !restaurants ? (
    <Shimmer />
  ) : (
    <div className="restaurant-menu">
      <div>
        <img src={IMG_CDN_URL + restaurants?.cloudinaryImageId} />
      </div>
      <h1>Restaurant Details</h1>
      <h2>Name:{restaurants?.name}</h2>
      <h3>Restaurant id:{restaurants?.id}</h3>

      <h3>Area:{restaurants?.areaName}</h3>
      <h3>City:{restaurants?.city}</h3>
      <h3>Rating:{restaurants?.avgRating} stars</h3>
    </div>
  );
};

export default RestaurantMenu;
