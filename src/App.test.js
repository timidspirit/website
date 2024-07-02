// App.test.js
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

test('renders About Me link', () => {
  render(<App />);
  const linkElement = screen.getByText(/About Me/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Skills section', () => {
  render(<App />);
  const skillsElement = screen.getByText(/Skills/i);
  expect(skillsElement).toBeInTheDocument();
});

test('renders Portfolio section', () => {
  render(<App />);
  const portfolioElement = screen.getByText(/Portfolio/i);
  expect(portfolioElement).toBeInTheDocument();
});

test('renders Photos section', () => {
  render(<App />);
  const photosElement = screen.getByText(/Photos/i);
  expect(photosElement).toBeInTheDocument();
});

test('renders Contact section', () => {
  render(<App />);
  const contactElement = screen.getByText(/Contact/i);
  expect(contactElement).toBeInTheDocument();
});