import fetchMock from "jest-fetch-mock";
fetchMock.enableMocks();

import React from "react";
import { render, waitFor } from "@testing-library/react";
import App from "./App";

beforeEach(() => {
  fetch.resetMocks();
  fetch.mockResponseOnce(
    JSON.stringify([
      {
        url: "https://example.com/photo.jpg",
        title: "Sample Photo",
        date: "2023-04-01",
      },
    ])
  );
});

test("renders App and checks if fetch is called", async () => {
  render(<App />);

  await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));
});
