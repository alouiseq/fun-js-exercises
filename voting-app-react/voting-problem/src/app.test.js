import userEvent from "@testing-library/user-event";
import React from "react";
import { screen, render } from "@testing-library/react";
import VotingApp from "./App";

test("should show initial state", () => {
  render(<VotingApp />);
  const thing = screen.getByText(/100/);
  expect(thing).toBeTruthy();
});
