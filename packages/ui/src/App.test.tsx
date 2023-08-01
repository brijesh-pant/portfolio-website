import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Click me button text", () => {
  render(<App />);
  const buttonElement = screen.getByText(/Click me!/i);
  expect(buttonElement).toBeInTheDocument();
});
