const{ test, expect } = require('@playwright/test');

test.beforeEach(async ({page}) => {
    await page.goto('https://www.saucedemo.com/');
    
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    await expect(page).toHaveURL(/inventory/);
    await expect(page.locator('.title')).toHaveText('Products');
});

test('TC-004: Verify product list loads after login', async({page}) => {
    const productItems = page.locator('.inventory_item');
    const addToCartButtons = page.getByRole('button', {name:'Add to cart'});

    await expect(productItems.first()).toBeVisible();
    await expect(addToCartButtons.first()).toBeVisible();
    await expect(addToCartButtons.first()).toBeEnabled();
});

test('TC-005: Verify user can add item to cart', async({page}) => {  
    const productItems = page.locator('.inventory_item');
    const firstProduct = productItems.first();
    const addToCartButton = firstProduct.getByRole('button', {name:'Add to cart'});
    const removeButton = firstProduct.getByRole('button', {name: 'Remove'});
    const cartBadge = page.locator('[data-test="shopping-cart-badge"]');

    await expect(firstProduct).toBeVisible();
    await expect(addToCartButton).toBeVisible();
    await expect(addToCartButton).toBeEnabled();
    
    await addToCartButton.click();

    await expect(removeButton).toBeVisible();
    await expect(cartBadge).toHaveText('1');
});

test('TC-010: Verify cart count updates correctly', async({page}) => {  
    const productItems = page.locator('.inventory_item');

    const firstProduct = productItems.first();
    const secondProduct = productItems.nth(1); // second available product
    
    const firstAddToCartButton = firstProduct.getByRole('button', {name:'Add to cart'});
    const secondAddToCartButton = secondProduct.getByRole('button', {name:'Add to cart'});
    
    const firstProductRemoveButton = firstProduct.getByRole('button', {name: 'Remove'});
    const secondProductRemoveButton = secondProduct.getByRole('button', {name: 'Remove'});
    const cartBadge = page.locator('[data-test="shopping-cart-badge"]');

    await expect(firstProduct).toBeVisible();
    await expect(secondProduct).toBeVisible();

    await expect(firstAddToCartButton).toBeVisible();
    await expect(firstAddToCartButton).toBeEnabled();
    await expect(secondAddToCartButton).toBeVisible();
    await expect(secondAddToCartButton).toBeEnabled();
    
    // add first item
    await firstAddToCartButton.click();

    await expect(firstProductRemoveButton).toBeVisible();
    await expect(cartBadge).toHaveText('1');

    // add second item
    await secondAddToCartButton.click();

    await expect(secondProductRemoveButton).toBeVisible();
    await expect(cartBadge).toHaveText('2');

    // remove an item and check cart badge number
    await firstProductRemoveButton.click();
    await expect(cartBadge).toHaveText('1');
});