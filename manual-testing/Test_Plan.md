# Test Plan – SauceDemo QA Portfolio

## 1. Project Overview

This project demonstrates end-to-end Quality Assurance testing for the SauceDemo web application. The goal is to validate core e-commerce workflows such as authentication, product selection, cart management, and checkout functionality.

This test plan outlines the testing strategy, scope, approach, and deliverables used to ensure application quality.

---

## 2. Application Under Test

SauceDemo (https://www.saucedemo.com)

A sample e-commerce web application used for QA practice, featuring login functionality, product listing, cart operations, and checkout flow.

---

## 3. Scope of Testing

### In Scope

- User login functionality (valid, invalid, locked user)
- Product page loading and UI validation
- Add to cart and remove from cart
- Cart behavior and item count validation
- Checkout process validation
- Logout functionality
- Error message validation

### Out of Scope

- Payment gateway integration
- Third-party services
- Mobile application testing
- Security penetration testing
- Database/backend validation (handled separately via API testing)

---

## 4. Testing Types

- Functional Testing
- Regression Testing
- Smoke Testing
- Exploratory Testing
- End-to-End Testing

---

## 5. Test Environment

- Application URL: https://www.saucedemo.com
- Browser: Chrome (latest)
- OS: Windows 10/11
- Tools:
  - Manual Testing Documentation
  - Playwright (automation)
  - Postman (API testing)

---

## 6. Test Data

| Scenario | Username | Password |
|----------|---------|----------|
| Valid Login | standard_user | secret_sauce |
| Locked User | locked_out_user | secret_sauce |
| Invalid Login | invalid_user | wrong_password |

---

## 7. Entry Criteria

- Application is accessible
- Test environment is ready
- Test data is available
- Test cases are prepared

---

## 8. Exit Criteria

- All test cases executed
- Critical and high severity defects resolved
- Regression testing completed
- Test results documented

---

## 9. Risks

- Limited backend/API access (handled via companion API testing)
- Test environment instability
- UI changes affecting automation scripts

---

## 10. Deliverables

- Test Plan
- Test Cases
- Regression Test Suite
- Automation Test Scripts (Playwright)
- API Test Collection (Postman)
- Performance Testing (JMeter - upcoming)
- Bug Reports (upcoming)

---

## 11. Summary

This test plan supports a complete QA workflow demonstrating manual testing, automation, API testing, and future performance validation for a real-world testing scenario.
