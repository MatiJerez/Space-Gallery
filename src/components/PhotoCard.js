import React from "react";

function PhotoCard({ photo, onToggleFavorite, onViewDetail, isFavorite }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img
        className="w-full h-64 object-cover"
        src={photo.url}
        alt={photo.title}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 h-12 flex justify-center">
          {photo.title}
        </div>
      </div>
      <div className="px-6 pb-2">
        <div className="px-6 pb-2 flex ">
          <button
            onClick={() => onViewDetail(photo)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
          >
            {"View Details"}
          </button>
          <button
            className={`${
              isFavorite
                ? "bg-red-500 hover:bg-red-700"
                : "bg-gray-500 hover:bg-gray-700"
            } text-white font-bold py-2 px-4 rounded`}
            onClick={() => onToggleFavorite(photo)}
          >
            {isFavorite ? "Remove Favorite" : "Add to Favorites"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default PhotoCard;
