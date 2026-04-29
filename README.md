# SauceDemo QA Portfolio – End-to-End Testing Project

This project demonstrates a complete **end-to-end Quality Assurance workflow** using a real-world web application.

The goal of this portfolio is to showcase practical QA skills across the full testing lifecycle, including manual testing, UI automation, API testing, performance testing, bug reporting, and CI/CD integration.

---

## 🔗 Application Under Test

- SauceDemo (UI Testing Application)

---

## 🧰 Tools & Technologies

- UI Automation: Playwright (JavaScript)
- API Testing: Postman
- Performance Testing: JMeter
- CI/CD: GitHub Actions
- Languages: JavaScript
- Version Control: Git & GitHub

---

## 📂 Project Structure

---

## 🧪 Testing Coverage

### ✅ Manual Testing
- Test Plan
- Functional Test Cases
- Regression Test Suite
- Smoke and Negative Testing

### 🤖 UI Automation (Playwright)
- Login scenarios (valid, invalid, locked user)
- Product page validation
- Add/remove items from cart
- Checkout validation
- Logout functionality

### 🔌 API Testing (Postman)
- GET, POST, PUT, DELETE requests
- Status code validation
- JSON response validation
- Environment variables and test scripts
- Negative testing for invalid requests

### ⚡ Performance Testing (JMeter)
- Login load testing
- Product page performance
- Checkout flow testing
- Concurrent user simulation
- Response time and error rate analysis

### 🐞 Bug Reporting
- Documented real-world defects
- Includes severity, priority, steps, and screenshots

### 🔄 CI/CD Integration
- Playwright tests run automatically using GitHub Actions
- Triggered on push and pull requests
- Test reports uploaded as artifacts

---

## 🚀 How to Run Tests

### ▶️ Playwright Tests

```bash
cd automation/playwright
npm install
npx playwright install
npx playwright test