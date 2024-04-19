import { test, expect } from '@playwright/test';

test('Navigation', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await expect(page.getByText('React/Full Stack Software')).toBeVisible();
  await expect(page.getByText('Primary Developer Skills (')).toBeVisible();
  await expect(page.getByText('Skills', { exact: true })).toBeVisible();
  await page.getByRole('link', { name: 'Skill PlotsGo to Skills' }).click();
  await expect(page.getByText('Skill Plots')).toBeVisible();
  await page.getByRole('link', { name: 'Jaz Singh' }).click();
  await expect(page.getByText('React/Full Stack Software')).toBeVisible();
  await expect(page.getByText('Engineering Metrics 2019-')).toBeVisible();
  await page.getByRole('link', { name: 'Color Engineering Blog Post' }).click();
  await expect(page.getByRole('heading', { name: 'My Engineering Experience at' })).toBeVisible();
  await page.getByRole('link', { name: 'Articles' }).click();
  await page.getByRole('link', { name: 'Jaz Singh' }).click();
  await page.getByRole('link', { name: 'All Github Projects' }).click();
  await expect(page.getByText('All Github Projects')).toBeVisible();
  await page.getByRole('link', { name: 'Jaz Singh' }).click();
  await page.getByLabel('Menu').click();
  await page.getByRole('link', { name: 'Publications' }).click();
  await expect(page.getByText('Publications').first()).toBeVisible();
  await page.getByRole('link', { name: 'Jaz Singh' }).click();
  await page.getByLabel('Menu').click();
  await page.getByRole('link', { name: 'Presentations' }).click();
  await expect(page.getByText('Presentations').first()).toBeVisible();
});

test('Menu Links', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await page.getByLabel('Menu').click();
  await expect(page.getByRole('link', { name: 'Resume' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Resume' })).toHaveAttribute(
    'href',
    'https://goo.gl/qWsPm'
  );
  await expect(page.getByRole('link', { name: 'LinkedIn' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute(
    'href',
    'https://www.linkedin.com/in/jazeee'
  );
  await expect(page.getByRole('link', { name: 'Github', exact: true })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Recommendations' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Recommendations' })).toHaveAttribute(
    'href',
    'https://www.linkedin.com/in/jazeee/details/recommendations'
  );
});
