import { test, expect } from '@playwright/test';

test('Can Open Flaky tests articles', async ({ page }) => {
  await page.goto('http://localhost:3000');

  await expect(page).toHaveTitle(/Home - Jaz Singh/);
  await page.getByLabel('Menu').click();
  await page.getByRole('link', { name: 'Articles' }).click();
  await page.getByRole('link', { name: 'Flaky Tests and Engineering' }).click();
  await page.getByText('Achieving the insurmountable.').click();
  await expect(page.getByRole('heading')).toContainText('Flaky Tests and Engineering Impact');
  await page.getByRole('link', { name: 'next post' }).click();
  await expect(page.getByRole('heading')).toContainText('Reliable Testing Guidelines');
  await expect(page.getByText('Conclusion')).toBeVisible();
});
