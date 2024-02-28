import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

test("renders the header with the NASA logo and title", () => {
  render(<Header />);
  const titleElement = screen.getByText(/Space Gallery/i);
  expect(titleElement).toBeInTheDocument();
  const logo = screen.getByAltText("NASA logo");
  expect(logo).toBeInTheDocument();
});
