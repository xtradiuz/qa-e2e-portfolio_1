# BUG-003: Checkout Error Message Does Not Indicate Field Location Clearly

## Severity
Low

## Priority
Medium

## Environment
- Browser: Chrome
- OS: Windows 11
- Application: SauceDemo

## Steps to Reproduce
1. Log in as `standard_user`.
2. Add an item to the cart.
3. Navigate to Checkout.
4. Leave First Name blank.
5. Fill other fields.
6. Click Continue.

## Expected Result
The application should highlight the missing field (First Name) visually and guide the user directly to the input field.

## Actual Result
The application displays a generic error message:  
`Error: First Name is required`

## Issue
The error message does not visually indicate or highlight the specific input field, which may cause confusion for users.

## Status
Open

## Notes
This is a usability issue related to form validation clarity.