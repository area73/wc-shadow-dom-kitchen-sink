import {LitElement, html} from '@polymer/lit-element';

class AnimatedIconNoShadow extends LitElement {
  static get properties() {
    return {
      display: { type: String }
    };
  }

  /**
   * Haking shadowDOM original method initialize()
   */
  initialize() {
    this.renderRoot = this;
    this._saveInstanceProperties();
  }


  render() {
    return html`
      <div>CSS3</div>
    `;
  }

}

window.customElements.define('wc-animated-icon-no-shadow', AnimatedIconNoShadow);
