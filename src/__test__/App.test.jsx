// import '@testing-library/jest-dom'
// import { render } from "@testing-library/react"
// import App from "../App"


// test('demo', () => {
//     expect(true).toBe(true)
// })

// test("Renders the main page", () => {
//     render(<App />)
//     expect(true).toBeTruthy()
// })



import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

