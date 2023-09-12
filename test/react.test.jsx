import { render, screen, cleanup, fireEvent } from "@testing-library/react"
import { afterEach, describe, expect, it } from "vitest"
import Calculator from "../src/Calculator"

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const operations = ["+", "-", "*", "/"]

describe("Calculator", () => {
  afterEach(cleanup)
  it("should render", () => {
    render(<Calculator />)
  })

  it("should render title correctly", () => {
    render(<Calculator />)

    screen.getByText("Calculator")
  })

  it("should render numbers", () => {
    render(<Calculator />)

    numbers.forEach((number) => {
      screen.getByText(number)
    })
  })

  it("should render 4 rows", () => {
    render(<Calculator />)

    const rows = screen.getAllByRole("row")
    expect(rows.length).toBe(4)
  })

  it("should render operatons", () => {
    render(<Calculator />)

    operations.forEach((operation) => {
      screen.getByText(operation)
    })
  })

  it("should render equal sign", () => {
    render(<Calculator />)

    screen.getByText("=")
  })

  it("should render input", () => {
    render(<Calculator />)

    screen.getByRole("textbox")
  })

  it("should show user input after clicking a number", () => {
    render(<Calculator />)

    const one = screen.getByText("1")
    fireEvent.click(one)

    const input = screen.getByRole("textbox")
    expect(input.value).toBe("1")
  })

  it("should show user input after clicking several numbers", () => {
    render(<Calculator />)

    const one = screen.getByText("1")
    fireEvent.click(one)

    const two = screen.getByText("2")
    fireEvent.click(two)

    const three = screen.getByText("3")
    fireEvent.click(three)

    const input = screen.getByRole("textbox")
    expect(input.value).toBe("123")
  })

  it("should show user input after clicking numbers and operations", () => {
    render(<Calculator />)

    const one = screen.getByText("1")
    fireEvent.click(one)

    const plus = screen.getByText("+")
    fireEvent.click(plus)

    const two = screen.getByText("2")
    fireEvent.click(two)

    const three = screen.getByText("3")
    fireEvent.click(three)

    const input = screen.getByRole("textbox")
    expect(input.value).toBe("1+23")
  })

  it("should calculate based on user input and show the calculation", () => {
    render(<Calculator />)

    const one = screen.getByText("1")
    fireEvent.click(one)

    const plus = screen.getByText("+")
    fireEvent.click(plus)

    const two = screen.getByText("2")
    fireEvent.click(two)

    const three = screen.getByText("3")
    fireEvent.click(three)

    const equal = screen.getByText("=")
    fireEvent.click(equal)

    const input = screen.getByRole("textbox")
    expect(input.value).toBe("24")
  })

  it("should keeping calculating after clicking equal sign", () => {
    render(<Calculator />)

    const one = screen.getByText("1")
    fireEvent.click(one)

    const plus = screen.getByText("+")
    fireEvent.click(plus)

    const two = screen.getByText("2")
    fireEvent.click(two)

    const three = screen.getByText("3")
    fireEvent.click(three)

    const equal = screen.getByText("=")
    fireEvent.click(equal)

    const plusAgain = screen.getByText("+")
    fireEvent.click(plusAgain)

    const four = screen.getByText("4")
    fireEvent.click(four)

    const equalAgain = screen.getByText("=")
    fireEvent.click(equalAgain)

    const input = screen.getByRole("textbox")
    expect(input.value).toBe("28")
  })
})
