import {LitElement, html} from '@polymer/lit-element';
import './WCLevel2';
class WCLevel1 extends LitElement {
  static get properties() {
    return {

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
     WC-LEVEL 1 [NO SHADOW]
      <br>
      <div class="c-btn c-btn--primary">c-btn c-btn--primary</div>
      <div class="wc-container">
        <wc-level2></wc-level2>
      </div> 
    `;
  }

}

window.customElements.define('wc-level1', WCLevel1);
