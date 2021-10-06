// __tests__/index.test.jsx

/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Home from "../pages/index";
import { ThemeSettingProvider } from "@state/theme";
import { TimeSettingProvider } from "@state/time";
import { act } from "react-dom/test-utils";

jest.useFakeTimers();

// you want to test how you user uses your application
const Component = () => {
  return (
    <ThemeSettingProvider>
      <TimeSettingProvider>
        <Home />
      </TimeSettingProvider>
    </ThemeSettingProvider>
  );
};

describe("Home", () => {
  it("Contains Head", () => {
    render(<Component />);
    const heading = screen.getByRole("heading", {
      name: /pomodoro/i,
    });
    expect(heading).toBeInTheDocument();
  });

  test("Changing mode changes start time", () => {
    render(<Component />);
    fireEvent.click(screen.getByRole("button", { name: "short break" }));
    expect(screen.getByTestId("progress-time")).toHaveTextContent("5:00");
    fireEvent.click(screen.getByRole("button", { name: "long break" }));
    expect(screen.getByTestId("progress-time")).toHaveTextContent("15:00");
    fireEvent.click(screen.getByRole("button", { name: "pomodoro" }));
    expect(screen.getByTestId("progress-time")).toHaveTextContent("25:00");
  });

  it("Timer decreases after pressing start", () => {
    render(<Component />);
    fireEvent.click(screen.getByRole("button", { name: "pomodoro" }));
    fireEvent.click(screen.getByTestId("start-btn"));
    act(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(screen.getByTestId("progress-time")).toHaveTextContent("24:59");
  });

  it("Changing mode after pressing start resets timer based on selected mode", () => {
    render(<Component />);
    fireEvent.click(screen.getByRole("button", { name: "pomodoro" }));
    fireEvent.click(screen.getByTestId("start-btn"));
    fireEvent.click(screen.getByRole("button", { name: "short break" }));
    expect(screen.getByTestId("progress-time")).toHaveTextContent("5:00");
  });
  it("Increasing and decreasing minutes increases or decreases time with saved states in settings", () => {
    render(<Component />);
    fireEvent.click(screen.getByTestId("increase-pomodoro"));
    fireEvent.click(screen.getByTestId("increase-pomodoro"));
    fireEvent.click(screen.getByTestId("decrease-pomodoro"));
    fireEvent.click(screen.getByTestId("increase-shortBreak"));
    fireEvent.click(screen.getByTestId("increase-shortBreak"));
    fireEvent.click(screen.getByTestId("decrease-shortBreak"));
    fireEvent.click(screen.getByTestId("increase-longBreak"));
    fireEvent.click(screen.getByTestId("increase-longBreak"));
    fireEvent.click(screen.getByTestId("decrease-longBreak"));
    fireEvent.click(screen.getByTestId("apply-settings-btn"));
    fireEvent.click(screen.getByRole("button", { name: "pomodoro" }));
    expect(screen.getByTestId("progress-time")).toHaveTextContent("26:00");
    fireEvent.click(screen.getByRole("button", { name: "short break" }));
    expect(screen.getByTestId("progress-time")).toHaveTextContent("6:00");
    fireEvent.click(screen.getByRole("button", { name: "long break" }));
    expect(screen.getByTestId("progress-time")).toHaveTextContent("16:00");
    expect(screen.getByTestId("pomodoro-settings-val")).toHaveTextContent("26");
    expect(screen.getByTestId("shortBreak-settings-val")).toHaveTextContent(
      "6"
    );
    expect(screen.getByTestId("longBreak-settings-val")).toHaveTextContent(
      "16"
    );
  });
  it("Button pause renders after start", () => {
    render(<Component />);
    expect(screen.getByTestId("start-btn")).toBeTruthy();

    fireEvent.click(screen.getByTestId("start-btn"));
    act(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(screen.getByTestId("pause-btn")).toBeTruthy();
  });
  it("Button restart after timer ends", () => {
    render(<Component />);
    expect(screen.getByTestId("start-btn")).toBeTruthy();
    fireEvent.click(screen.getByTestId("start-btn"));
    act(() => {
      jest.advanceTimersByTime(1502000);
    });
    expect(screen.getByTestId("restart-btn")).toBeTruthy();
  });
});
