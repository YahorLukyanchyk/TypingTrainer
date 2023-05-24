import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Home from "../components/home/home";

describe("Home", () => {
  it("should render the component correctly", () => {
    render(<Home />);

    // Проверяем, что компонент отрисовался корректно
    expect(
      screen.getByText("Отслеживание достижений и прогресса")
    ).toBeInTheDocument();
  });
});
