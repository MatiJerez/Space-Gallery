import React from "react";

function FavoritesFilter({ onFilterChange, filterActive }) {
  return (
    <div className="flex justify-end p-4">
      <button
        className={`bg-${filterActive ? "blue" : "gray"}-500 hover:bg-${
          filterActive ? "blue" : "gray"
        }-700 text-white font-bold py-2 px-4 rounded`}
        onClick={onFilterChange}
      >
        {filterActive ? "Show All" : "Show Favorites"}
      </button>
    </div>
  );
}

export default FavoritesFilter;
