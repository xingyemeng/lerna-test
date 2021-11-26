import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'bullet-screen',
  styleUrl: 'bullet-screen.css',
  shadow: true,
})
export class BulletScreen {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
