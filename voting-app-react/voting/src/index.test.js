import userEvent from "@testing-library/user-event";
import React from "react";
import { screen, render } from "@testing-library/react";
import VotingApp from "./App";

test("should show initial state", () => {
  render(<VotingApp />);
  const thing = screen.getByText(/100/);
  expect(thing).toBeTruthy();
});

test("should toggle button state", () => {
  render(<VotingApp />);
  const thingInitial = screen.getByText(/100/);
  expect(thingInitial).toBeTruthy();

  const btn = screen.getByTestId("like");
  userEvent.click(btn);
  const thingUp = screen.getByText(/101/);
  expect(thingUp).toBeTruthy();

  userEvent.click(btn);
  const thingDown = screen.getByText(/100/);
  expect(thingDown).toBeTruthy();
});
