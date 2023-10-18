import { render, screen } from "@testing-library/react"
import Async from "./Async"

describe('Async component', () => {
    test('renders posts if the request succeeds', async () => {
        render(<Async />)

        // Act

        // Assert
        const listItems = await screen.findAllByRole('listitem');
        expect(listItems).not.toHaveLength(0);
    })
})