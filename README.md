# 🚀 WebDriverIO Test Automation Framework

[![Node.js](https://img.shields.io/badge/node-%3E%3D16.0.0-green)](https://nodejs.org/)
[![WebDriverIO](https://img.shields.io/badge/WebDriverIO-v8.x-red)](https://webdriver.io/)
[![Mocha](https://img.shields.io/badge/Mocha-tested-green)](https://mochajs.org/)
[![Jasmine](https://img.shields.io/badge/Jasmine-supported-blue)](https://jasmine.github.io/)
[![Chai](https://img.shields.io/badge/Chai-BDD%20assertions-orange)](https://www.chaijs.com/)
[![Allure Report](https://img.shields.io/badge/Allure-Reports-yellowgreen)](https://docs.qameta.io/allure/)
![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-%232671E5.svg?logo=githubactions&logoColor=white)

> A robust end-to-end test automation framework using WebDriverIO with support for Mocha, Jasmine, and Chai assertions. Supports Chrome and Edge browsers, integrates Allure reporting, follows the Page Object Model (POM), and supports data-driven testing.

---

## 📌 Features

- ✅ **WebDriverIO v8** based
- 🧪 **Mocha**, **Jasmine** test runner support
- 📌 **Chai** for expressive assertions
- 🌐 Cross-browser support: **Chrome** and **Edge**
- 📊 Integrated **Allure Reports**
- 🤖 **GitHub Actions** CI/CD support
- 🧱 **Page Object Model (POM)** architecture
- 📈 **Data-Driven Testing** supported with JSON/Excel/CSV
- 🧪 Pre-configured suites: Regression, Functional, End-to-End, Smoke, and Sanity

---

## 🗂 Project Structure

```bash
├── test/
│ ├── specs/ # Test cases
│ ├── pageobjects/ # Page Object classes
│ ├── handler/ # Execution handler for sequential flow
│ ├── flows/ # Script for sequential flow Test Cases
│ └── test-data/ # Test data files
├── wdio.conf.js # WebDriverIO Configuration (Chrome)
├── wdio.edge.conf.js # WebDriverIO Configuration (Edge)
├── .github/workflows/ # GitHub Actions YAMLs
├── package.json
└── README.md
```
---

## 🚀 Scripts

Use the following `npm` or `yarn` commands to run specific test suites:

```json
"scripts": {
  "regression": "wdio run ./wdio.conf.js --suite regression",
  "functional": "wdio run ./wdio.conf.js --suite functional",
  "end2end": "wdio run ./wdio.conf.js --suite end2end",
  "smoke": "wdio run ./wdio.conf.js --suite smoke",
  "smoke": "wdio run ./wdio.conf.js --suite flow",
  "sanity": "npx wdio run wdio.conf.js --jasmineOpts.grep Sanity",
  "sanityEdge": "npx wdio run wdio.edge.conf.js --mochaOpts.grep Sanity",
  "generateReport": "allure generate allure-results --clean",
  "combineReport": "node ./node_modules/allure-single-html-file-js/combine.js allure-report",
  "allureOpen": "allure open"
}
```

# 🧪 How to Run Tests
## ✅ Install Dependencies

```bash
    npm install
```

## ▶ Run Test Suites
```bash
    Regression: npm run regression

    Functional: npm run functional

    End-to-End: npm run end2end

    Smoke: npm run smoke

    Sanity (Chrome): npm run sanity
    
    Sanity (Edge): npm run sanityEdge
```

## 📊 Generate Allure Report
```bash
    npm run generateReport
    npm run allureOpen
```
## To combine HTML into a single file:
```bash
    npm run combineReport
```