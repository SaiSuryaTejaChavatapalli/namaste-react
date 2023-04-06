import { IMG_CDN_URL } from "../constants";
const RestaurantCard = ({ name, cuisines, avgRating, cloudinaryImageId }) => {
  return (
    <div className="res-card w-52 p-2 m-2 shadow-lg">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt="restraunt-card" />
      <h2 className="font-bold text-xl">{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating} stars</h4>
    </div>
  );
};

export default RestaurantCard;
