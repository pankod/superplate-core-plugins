import React from "react";
import { render, screen } from "@testing-library/react";
import { TestComponent } from "./index";

it("renders hello world message", () => {
  render(<TestComponent />);
  expect(screen.getByText("Hello World")).toBeInTheDocument();
});
