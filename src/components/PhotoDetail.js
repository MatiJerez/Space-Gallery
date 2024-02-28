import React from "react";

function PhotoDetail({ photo, onBack }) {
  return (
    <div>
      <button
        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        onClick={onBack}
      >
        Back
      </button>
      <div className="max-w-4xl mx-auto mt-5">
        <img src={photo.url} alt={photo.title} className="w-full" />
        <div className="mt-4">
          <h1 className="font-bold text-xl">{photo.title}</h1>
          <p>{photo.explanation}</p>
        </div>
      </div>
    </div>
  );
}

export default PhotoDetail;
