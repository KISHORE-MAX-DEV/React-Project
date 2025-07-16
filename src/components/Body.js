import RestaurantCard from "./RestaurantCard"
import restaurantList from "../utils/mockData"
import { useState } from "react"

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(restaurantList)

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-button"
          onClick={() => {
            const filteredList = restaurantList.filter(
              (res) => res.avgRating > 4.5
            )
            setListOfRestaurants(filteredList)
          }}
        >
          Top rated Restaurant
        </button>
      </div>
      <div className="restaurant-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurantData={restaurant} />
        ))}
      </div>
    </div>
  )
}

export default Body
