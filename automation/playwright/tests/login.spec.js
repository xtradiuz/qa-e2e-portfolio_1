const{test, expect} = require('@playwright/test');

test.beforeEach(async ({page}) => {
    await page.goto('https://www.saucedemo.com/');
});

test('TC-001: Verify valid user can log in', async({page}) => {
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    await expect(page).toHaveURL(/inventory/);
    await expect(page.locator('.title')).toHaveText('Products');
});

test('TC-002: Verify locked-out user cannot log in', async({page}) => {
    await page.locator('[data-test="username"]').fill('locked_out_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    await expect(page.locator('[data-test="error"]')).toBeVisible();
    await expect(page.locator('[data-test="error"]')).toContainText('locked out');
});

test('TC-003: Verify invalid password shows error message', async({page}) => {
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('abc123');
    await page.locator('[data-test="login-button"]').click();

    await expect(page.locator('[data-test="error"]')).toBeVisible();
    await expect(page.locator('[data-test="error"]')).toContainText('Username and password do not match');
});

test('TC-009: Verify user can log out', async({page}) => {
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    await expect(page).toHaveURL(/inventory/);
    await expect(page.locator('.title')).toHaveText('Products');

    const openMenuButton = page.getByRole('button', {name: 'Open Menu'});
    const logoutButton = page.locator('[data-test="logout-sidebar-link"]');
    const loginButton = page.locator('[data-test="login-button"]');
    const usernameField = page.locator('[data-test="username"]');

    await expect(openMenuButton).toBeVisible();
    await openMenuButton.click();

    await expect(logoutButton).toBeVisible();
    await logoutButton.click();

    await expect(page).toHaveURL('https://www.saucedemo.com/');
    await expect(usernameField).toBeVisible();
    await expect(loginButton).toBeVisible();
});