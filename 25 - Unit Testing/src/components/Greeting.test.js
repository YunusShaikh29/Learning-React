import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

// test('Renders Hello World as a text', () => {
//     // Arrange
//     render(<Greeting />)

//     // Act
//     // ...nothing

//     // Assert
//     const helloWorldElement = screen.getByText('Hello World', {exact: true})
//     expect(helloWorldElement).toBeInTheDocument()
// })

/* Grouping tests together  */

describe("Greeting Component", () => {
  test("Renders Hello World as a text", () => {
    // Arrange
    render(<Greeting />);

    // Act
    // ...nothing

    // Assert
    const helloWorldElement = screen.getByText("Hello World", { exact: true });
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders good to see you if the button is NOT clicked", () => {
    render(<Greeting />);

    const outputElement = screen.getByText("good to see you", { exact: false });
    expect(outputElement).toBeInTheDocument();
  });
});
