const{test, expect} = require('@playwright/test');

test('TC-006: Verify user can remove item from cart', async({page}) => {
    await page.goto('https://www.saucedemo.com/');
    
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[id="login-button"]').click();

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
});