import React from "react";
import { render, screen, wait } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import Header from "../components/header/header";

describe("Header", () => {
  it("Checking correct login functionaloty", async () => {
    render(<Header />);

    userEvent.click(screen.getByText("Вход/Регистрация"));
    userEvent.type(
      screen.getByPlaceholderText("Почта"),
      "yahorlukyanchyk@gmail.com"
    );
    userEvent.type(screen.getByPlaceholderText("Пароль"), "2750894ZXC");
    userEvent.click(screen.getByText("Войти"));

    await wait(
      () => {
        expect(screen.getByText("Yahor Lukyanchyk")).toBeInTheDocument();
      },
      { timeout: 3000 }
    );
  });
});
