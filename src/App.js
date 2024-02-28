import React, { useState, useEffect } from "react";
import PhotoCard from "./components/PhotoCard";
import Header from "./components/Header";
import FavoritesFilter from "./components/FavoritesFilter";
import PhotoDetail from "./components/PhotoDetail";

function App() {
  const [photos, setPhotos] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [filterFavorites, setFilterFavorites] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  useEffect(() => {
    const fetchPhotos = async () => {
      let data;

      const storedPhotos = localStorage.getItem("photos");
      if (storedPhotos) {
        data = JSON.parse(storedPhotos);
      } else {
        const response = await fetch(
          "https://api.nasa.gov/planetary/apod?api_key=YOUR_API_KEY&count=10"
        );
        data = await response.json();
        localStorage.setItem("photos", JSON.stringify(data));
      }
      setPhotos(data);
    };

    fetchPhotos();

    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  useEffect(() => {
    if (favorites.length === 0) return;
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (photo) => {
    setFavorites([...favorites, photo]);
  };

  const removeFavorite = (photo) => {
    setFavorites(favorites.filter((favorite) => favorite.date !== photo.date));
    localStorage.setItem(
      "favorites",
      JSON.stringify(
        favorites.filter((favorite) => favorite.date !== photo.date)
      )
    );
  };

  const toggleFavorite = (photo) => {
    if (favorites.some((favorite) => favorite.date === photo.date)) {
      removeFavorite(photo);
    } else {
      addFavorite(photo);
    }
  };

  const viewPhotoDetail = (photo) => {
    setSelectedPhoto(photo);
  };

  const backToList = () => {
    setSelectedPhoto(null);
  };

  const filteredPhotos = filterFavorites ? favorites : photos;

  return (
    <div>
      <Header />
      {selectedPhoto ? (
        <PhotoDetail photo={selectedPhoto} onBack={backToList} />
      ) : (
        <>
          <FavoritesFilter
            onFilterChange={() => setFilterFavorites(!filterFavorites)}
            filterActive={filterFavorites}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {filteredPhotos.map((photo) => (
              <PhotoCard
                key={photo.date}
                photo={photo}
                onToggleFavorite={() => toggleFavorite(photo)}
                onViewDetail={() => viewPhotoDetail(photo)}
                isFavorite={favorites.some(
                  (favorite) => favorite.date === photo.date
                )}
              />
            ))}
          </div>{" "}
        </>
      )}
    </div>
  );
}

export default App;
