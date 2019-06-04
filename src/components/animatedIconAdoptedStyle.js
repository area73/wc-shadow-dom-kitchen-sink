import {LitElement, html} from '@polymer/lit-element';

class AnimatedIconAdoptedStyle extends LitElement {
  static get properties() {
    return {
      display: { type: String }
    };
  }

  constructor() {
    super();
    this.shadowRoot.adoptedStyleSheets = [everythingTomato];
  }



  render() {
    return html`
      <div>CSS3</div>
    `;
  }

}

window.customElements.define('wc-animated-icon-adopted-style', AnimatedIconAdoptedStyle);
