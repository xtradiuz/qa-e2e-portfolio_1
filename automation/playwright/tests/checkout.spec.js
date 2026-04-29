const{test, expect} = require('@playwright/test');

test.beforeEach(async ({page}) => {
    await page.goto('https://www.saucedemo.com/');
    
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    await expect(page).toHaveURL(/inventory/);
    await expect(page.locator('.title')).toHaveText('Products');
    
    const productItems = page.locator('.inventory_item');
    const firstProduct = productItems.first();
    const addToCartButton = firstProduct.getByRole('button', {name:'Add to cart'});
    const removeButton = firstProduct.getByRole('button', {name: 'Remove'});
    const cartBadge = page.locator('[data-test="shopping-cart-badge"]')

    await expect(firstProduct).toBeVisible();
    await expect(addToCartButton).toBeVisible();
    await expect(addToCartButton).toBeEnabled();
    
    await addToCartButton.click();

    await expect(removeButton).toBeVisible();
    await expect(cartBadge).toHaveText('1');

    const cartIcon = page.locator('[data-test="shopping-cart-link"]');
    const continueShoppingButton = page.getByRole('button', {name: 'Continue Shopping'});
    const checkOutButton = page.getByRole('button', {name: 'Checkout'});

    await cartIcon.click();
    await expect(page).toHaveURL(/cart/);
    await expect(continueShoppingButton).toBeVisible();
    await expect(checkOutButton).toBeVisible();

    await checkOutButton.click();
    await expect(page).toHaveURL(/checkout-step-one/);
});

test('TC-007: Verify checkout requires first name, last name, and zip code', async({page}) => {
    const continueButton = page.locator('[data-test="continue"]');
    const firstNameField = page.locator('[data-test="firstName"]');
    const lastNameField = page.locator('[data-test="lastName"]');
    const postalCodeField = page.locator('[data-test="postalCode"]');
    const errorMessage = page.locator('[data-test="error"]');

    await expect(firstNameField).toBeVisible();
    await expect(lastNameField).toBeVisible();
    await expect(postalCodeField).toBeVisible();

    // first name required
    await lastNameField.fill('Doe');
    await postalCodeField.fill('19123');
    await continueButton.click();
    await expect(errorMessage).toHaveText('Error: First Name is required');

    // last name required
    await lastNameField.clear();
    await firstNameField.fill('John');
    await postalCodeField.fill('19123');
    await continueButton.click();
    await expect(errorMessage).toHaveText('Error: Last Name is required');

    // postal code required
    await postalCodeField.clear();
    await firstNameField.fill('John');
    await lastNameField.fill('Doe');
    await continueButton.click();
    await expect(errorMessage).toHaveText('Error: Postal Code is required');
});

test('TC-008: Verify user can complete checkout successfully', async({page}) => {
    const firstNameField = page.locator('[data-test="firstName"]');
    const lastNameField = page.locator('[data-test="lastName"]');
    const postalCodeField = page.locator('[data-test="postalCode"]');
    const continueButton = page.locator('[data-test="continue"]');
    const finishButton = page.locator('[data-test="finish"]');
    const backHomeButton = page.locator('[data-test="back-to-products"]');

    await expect(firstNameField).toBeVisible();
    await expect(lastNameField).toBeVisible();
    await expect(postalCodeField).toBeVisible();

    await firstNameField.fill("John");
    await lastNameField.fill("Doe");
    await postalCodeField.fill("19123");

    await continueButton.click();

    await expect(page.locator('[data-test="title"]')).toHaveText('Checkout: Overview');
    await expect(page.locator('[data-test="payment-info-label"]')).toBeVisible();
    await expect(finishButton).toBeVisible();
    await expect(finishButton).toBeEnabled();

    await finishButton.click();

    await expect(page.locator('[data-test="complete-header"]')).toHaveText('Thank you for your order!');
    await expect(backHomeButton).toBeVisible();
    await expect(backHomeButton).toBeEnabled();
});