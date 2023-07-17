import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Button from "../Button";
import TestIcon from "../../../utils/TestIcon";

describe("Running Test for Button", () => {
  test("Check Button Disabled", () => {
    render(<Button id="one-button" label="Button" disabled />);
    expect(screen.getByRole("button")).toHaveProperty("disabled", true);
  });
  test("Button contains requested label", () => {
    render(<Button id="second-button" label="One Test Label" />);
    expect(screen.getByRole("button").textContent).toContain("One Test Label");
  });
  test("Button contains icon at the end", () => {
    render(
      <Button id="second-button" label="One Test Label" icon={<TestIcon />} />,
    );
    expect(screen.getByRole("button").innerHTML).toContain(
      '<span class="button-label">One Test Label</span><span class="buttonIcon"><svg xmlns="http://www.w3.org/2000/svg" class="min-icon" fill="currentcolor" viewBox="0 0 256 256"><g><circle cx="128" cy="128" r="128"></circle></g></svg></span>',
    );
  });
  test("Button contains icon at the start", () => {
    render(
      <Button
        id="second-button"
        label="One Test Label"
        icon={<TestIcon />}
        iconLocation={"start"}
      />,
    );
    expect(screen.getByRole("button").innerHTML).toContain(
      '<span class="buttonIcon"><svg xmlns="http://www.w3.org/2000/svg" class="min-icon" fill="currentcolor" viewBox="0 0 256 256"><g><circle cx="128" cy="128" r="128"></circle></g></svg></span><span class="button-label">One Test Label</span>',
    );
  });
});
