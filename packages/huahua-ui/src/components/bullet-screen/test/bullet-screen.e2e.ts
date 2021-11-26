import { newE2EPage } from '@stencil/core/testing';

describe('bullet-screen', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<bullet-screen></bullet-screen>');

    const element = await page.find('bullet-screen');
    expect(element).toHaveClass('hydrated');
  });
});
