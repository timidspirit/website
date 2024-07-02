// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

// Mock static assets
jest.mock('../images/html-logo.png', () => 'test-file-stub');
jest.mock('../images/flutter-logo.png', () => 'test-file-stub');
jest.mock('../images/css-logo.png', () => 'test-file-stub');
jest.mock('../images/tailwind-logo.png', () => 'test-file-stub');
jest.mock('../images/python-logo.png', () => 'test-file-stub');
jest.mock('../images/dart-logo.png', () => 'test-file-stub');
jest.mock('../images/mysql-logo.png', () => 'test-file-stub');
jest.mock('../images/postgres-logo.png', () => 'test-file-stub');
jest.mock('../images/github-logo.png', () => 'test-file-stub');
jest.mock('../images/docker-logo.png', () => 'test-file-stub');
jest.mock('../images/vscode-logo.png', () => 'test-file-stub');
jest.mock('../images/postman-logo.png', () => 'test-file-stub');
jest.mock('../images/nodejs-logo.png', () => 'test-file-stub');
jest.mock('../images/reactjs-logo.png', () => 'test-file-stub');
