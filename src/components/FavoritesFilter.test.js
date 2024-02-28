import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import FavoritesFilter from "./FavoritesFilter";

test("toggle filter button changes text on click", () => {
  const handleFilterChange = jest.fn();
  render(
    <FavoritesFilter onFilterChange={handleFilterChange} filterActive={false} />
  );

  const button = screen.getByRole("button", { name: /Show Favorites/i });
  expect(button).toBeInTheDocument();

  fireEvent.click(button);
  expect(handleFilterChange).toHaveBeenCalledTimes(1);
});
