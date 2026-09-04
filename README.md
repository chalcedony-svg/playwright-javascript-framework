# SauceDemo Playwright JavaScript Automation Framework

## Project Overview

This project automates important SauceDemo business flows using Playwright with JavaScript and the Page Object Model (POM) design pattern. The framework separates page actions from test scenarios for improved readability, reusability, and maintainability. The project structure follows Page Objects, Tests, and Test Data organization. 

---

## Automated Scenarios

- Valid Login
- Invalid Login
- Locked User Login
- Add Product to Cart
- Verify Cart Contents
- Remove Product from Cart
- Complete Checkout
- Verify Successful Order Completion

---

## Framework Structure

```text
project
│
├── pages
│   ├── LoginPage.js
│   ├── InventoryPage.js
│   ├── CartPage.js
│   └── CheckoutPage.js
│
├── tests
│   ├── Login.spec.js
│   ├── Cart.spec.js
│   └── Checkout.spec.js
│
├── testData
│   ├── users.js
│   └── products.js
│
├── playwright.config.js
└── README.md
```

- `pages/` contains page locators, browser actions, and reusable methods.
- `tests/` contains test scenarios and assertions.
- `testData/` contains reusable users and product data.
- `playwright.config.js` contains execution and reporting configuration.


---

## Technologies Used

- JavaScript
- Node.js
- Playwright Test
- Page Object Model (POM)
- HTML Reports
- Git
- GitHub

---

## Installation

Install project dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```



---

## Execute Tests

Run complete suite:

```bash
npx playwright test
```

Run a specific file:

```bash
npx playwright test tests/Login.spec.js
```

Run with visible browser:

```bash
npx playwright test --headed
```

Open Playwright report:

```bash
npx playwright show-report
```

---

## Features

- Page Object Model Design
- Reusable Test Data
- End-to-End Checkout Validation
- Positive and Negative Login Scenarios
- HTML Reporting
- Screenshots on Failure
- Maintainable Framework Structure

---

## Author

**Chalcedony**

Playwright JavaScript Automation Learning Journey
