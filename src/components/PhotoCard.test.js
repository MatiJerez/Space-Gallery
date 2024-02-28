import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import PhotoCard from "./PhotoCard";

const photoMock = {
  url: "https://example.com/photo.jpg",
  title: "Sample Photo",
  date: "2023-04-01",
};

test("renders PhotoCard with photo information and buttons", () => {
  const onToggleFavorite = jest.fn();
  const onViewDetail = jest.fn();
  render(
    <PhotoCard
      photo={photoMock}
      onToggleFavorite={onToggleFavorite}
      onViewDetail={onViewDetail}
      isFavorite={false}
    />
  );

  const title = screen.getByText("Sample Photo");
  expect(title).toBeInTheDocument();
  const viewDetailsButton = screen.getByText("View Details");
  expect(viewDetailsButton).toBeInTheDocument();
  fireEvent.click(viewDetailsButton);
  expect(onViewDetail).toHaveBeenCalledTimes(1);

  const favoriteButton = screen.getByText("Add to Favorites");
  expect(favoriteButton).toBeInTheDocument();
  fireEvent.click(favoriteButton);
  expect(onToggleFavorite).toHaveBeenCalledTimes(1);
});
