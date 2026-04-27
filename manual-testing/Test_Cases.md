# Manual Test Cases

## TC-001: Verify valid user can log in

**Priority:** High  
**Type:** Smoke / Functional  
**Precondition:** User is on the login page  

### Steps
1. Enter a valid username.
2. Enter a valid password.
3. Click Login.

### Expected Result
User should be redirected to the products page.

---

## TC-002: Verify locked-out user cannot log in

**Priority:** High  
**Type:** Negative / Functional  
**Precondition:** User is on the login page  

### Steps
1. Enter the locked-out username.
2. Enter a valid password.
3. Click Login.

### Expected Result
User should remain on the login page and see a locked-out user error message.

---

## TC-003: Verify invalid password shows error message

**Priority:** High  
**Type:** Negative / Functional  
**Precondition:** User is on the login page  

### Steps
1. Enter a valid username.
2. Enter an invalid password.
3. Click Login.

### Expected Result
User should see an error message indicating the username or password is incorrect.

---

## TC-004: Verify product list loads after login

**Priority:** High  
**Type:** Functional  
**Precondition:** User is logged in successfully  

### Steps
1. Log in with a valid user.
2. Navigate to the products page.
3. Review the product list.

### Expected Result
Product items should be displayed with names, prices, images, and add-to-cart buttons.

---

## TC-005: Verify user can add item to cart

**Priority:** High  
**Type:** Functional  
**Precondition:** User is logged in and on the products page  

### Steps
1. Select a product.
2. Click Add to Cart.
3. Check the cart icon count.

### Expected Result
The selected item should be added to the cart and the cart count should increase.

---

## TC-006: Verify user can remove item from cart

**Priority:** Medium  
**Type:** Functional  
**Precondition:** User has at least one item in the cart  

### Steps
1. Open the cart.
2. Click Remove for the selected item.
3. Review the cart contents.

### Expected Result
The item should be removed from the cart and the cart count should update.

---

## TC-007: Verify checkout requires first name, last name, and zip code

**Priority:** High  
**Type:** Negative / Validation  
**Precondition:** User has at least one item in the cart and is on the checkout page  

### Steps
1. Leave first name, last name, and zip code blank.
2. Click Continue.

### Expected Result
User should see a required field validation error.

---

## TC-008: Verify user can complete checkout successfully

**Priority:** High  
**Type:** Smoke / Functional  
**Precondition:** User has at least one item in the cart  

### Steps
1. Open the cart.
2. Click Checkout.
3. Enter first name, last name, and zip code.
4. Click Continue.
5. Review the checkout overview.
6. Click Finish.

### Expected Result
User should see an order confirmation message.

---

## TC-009: Verify user can log out

**Priority:** Medium  
**Type:** Functional  
**Precondition:** User is logged in  

### Steps
1. Open the navigation menu.
2. Click Logout.

### Expected Result
User should be logged out and redirected to the login page.

---

## TC-010: Verify cart count updates correctly

**Priority:** High  
**Type:** Functional / Regression  
**Precondition:** User is logged in and on the products page  

### Steps
1. Add one item to the cart.
2. Verify the cart count displays 1.
3. Add another item to the cart.
4. Verify the cart count displays 2.
5. Remove one item.
6. Verify the cart count updates to 1.

### Expected Result
Cart count should accurately reflect the number of items in the cart.
