import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";
import userEvent from "@testing-library/user-event";

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

  test('renders "changed text" if the button is Clicked', () => {
    render(<Greeting />)

    //Act
    const buttonElement = screen.getByRole('button')
    userEvent.click(buttonElement)

    //Assert
    const outputElement = screen.getByText("changed text", { exact: false });
    expect(outputElement).toBeInTheDocument();
  })

  test('does not render "good to see you" text if the button was Clicked', () => {
    render(<Greeting />)

    //Act
    const buttonElement = screen.getByRole('button')
    userEvent.click(buttonElement)

    //Assert
    const outputElement = screen.queryByText("good to see you", { exact: false });
    expect(outputElement).toBeNull()
  })

});
