import {LitElement, html} from '@polymer/lit-element';

class NavBar extends LitElement {
  static get properties() {
    return {
      display: { type: String }
    };
  }

  static get styles() {
    return html`
      <style>
        :host {
          background-color: aliceblue;
          display:block;
          padding: 10px;
        }
        .nav-bar {
          background-color: darkkhaki;
          text-align: center;
        }
        .nav-bar a {
          display: inline-block;
          padding: 16px;
        }
      </style>
    `;
  }

  render() {
    return html`
      ${NavBar.styles}
      <p>slotted nav</p>
      <slot></slot>
      <p>shadowRoot nav</p>
      <nav class="nav-bar">
        <a href="/">home</a>
        <a href="/products/1/shirt">products</a>
        <a href="/about">about</a>
        <a href="/contact">contact</a>
        <a href="/counter/28">counter</a>
        <a href="/not-exist">not exist</a>
      </nav>
    `;
  }

  renderSlotted() {
    return html`
      ${NavBar.styles}
      <slot></slot>
    `;
  }

}

window.customElements.define('wc-nav-bar', NavBar);
