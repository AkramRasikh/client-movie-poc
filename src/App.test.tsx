import { render, screen } from "@testing-library/react";
import * as firebaseMethods from "./firebase-methods";
import App from "./App";
jest.mock("./firebase-methods");

test("renders movie list", async () => {
  const getMoviesMock = firebaseMethods.getMovies as jest.Mock;
  await getMoviesMock.mockImplementation(() => [{ id: "1", title: "movie!" }]);
  render(<App />);
  const linkElement = screen.findByText(/movie!/i);
  expect(linkElement).toBeDefined();
});
