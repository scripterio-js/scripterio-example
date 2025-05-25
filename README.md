# scripterio-example

This repository provides simple examples of how to perform unit and UI testing using [ScripterI/O](https://www.npmjs.com/package/scripterio).

## Features

- **Unit tests**: Demonstrates various assertions and async testing with ScripterI/O.
- **UI tests**: Shows how to use Playwright with ScripterI/O for browser automation.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/scripterio-example.git
   cd scripterio-example
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Install Playwright browsers:
   ```sh
   npx playwright install chromium --with-deps
   ```

### Running Tests

To run all tests:

```sh
npm test
```
or:

```sh
npx scripterio --folder=tests
```

## Project Structure

- `tests/unit_tests.js` – Unit test examples
- `tests/ui_tests.js` – UI test examples using Playwright
