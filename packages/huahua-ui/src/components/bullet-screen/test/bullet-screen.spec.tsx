import { newSpecPage } from '@stencil/core/testing';
import { BulletScreen } from '../bullet-screen';

describe('bullet-screen', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BulletScreen],
      html: `<bullet-screen></bullet-screen>`,
    });
    expect(page.root).toEqualHtml(`
      <bullet-screen>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </bullet-screen>
    `);
  });
});
