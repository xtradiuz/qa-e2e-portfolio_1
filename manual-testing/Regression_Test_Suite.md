# Regression Test Suite – SauceDemo QA Portfolio

## Overview

This regression test suite includes critical test scenarios that must be validated before every release to ensure core functionality is not broken.

---

## Critical Test Cases

### 1. Login Functionality

- Verify valid user can log in successfully
- Verify invalid login shows error message
- Verify locked-out user cannot log in

Expected Result:
User is either successfully logged in or receives appropriate error messages.

---

### 2. Product Page Load

- Verify product list loads after login
- Verify product names, prices, and images display correctly

Expected Result:
Product page loads without errors and displays all items correctly.

---

### 3. Cart Functionality

- Verify user can add item to cart
- Verify cart count updates correctly
- Verify user can remove item from cart

Expected Result:
Cart reflects accurate item count and updates correctly when items are added or removed.

---

### 4. Checkout Process

- Verify checkout requires First Name, Last Name, and Zip Code
- Verify error message appears when fields are missing
- Verify user can complete checkout successfully

Expected Result:
Checkout flow validates required fields and completes successfully when valid data is provided.

---

### 5. Logout Functionality

- Verify user can log out
- Verify user is redirected to login page

Expected Result:
User is logged out and session is cleared.

---

## Regression Execution Criteria

Run this suite:

- Before every release
- After bug fixes
- After major UI or functional changes

---

## Pass Criteria

- All critical test cases pass
- No high or critical severity defects remain open

---

## Notes

This regression suite is also partially automated using Playwright to ensure consistency and faster execution in CI/CD pipelines.


## Regression Execution Results

| Test ID | Scenario | Test Type | Status | Notes |
|---|---|---|---|---|
| REG-001 | Valid user can log in | Manual / Automated | Pass | Covered by Playwright |
| REG-002 | Invalid login shows error | Manual / Automated | Pass | Covered by Playwright |
| REG-003 | Locked-out user cannot log in | Manual / Automated | Pass | Covered by Playwright |
| REG-004 | Product list loads after login | Manual / Automated | Pass | Covered by Playwright |
| REG-005 | User can add item to cart | Manual / Automated | Pass | Covered by Playwright |
| REG-006 | User can remove item from cart | Manual / Automated | Pass | Covered by Playwright |
| REG-007 | Cart count updates correctly | Manual / Automated | Pass | Covered by Playwright |
| REG-008 | Checkout requires required fields | Manual / Automated | Pass | Covered by Playwright |
| REG-009 | User can complete checkout | Manual / Automated | Pass | Covered by Playwright |
| REG-010 | User can log out | Manual / Automated | Pass | Covered by Playwright |
