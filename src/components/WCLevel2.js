import {LitElement, html} from '@polymer/lit-element';
import './WCLevel3';

class WCLevel2 extends LitElement {
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
     WC-LEVEL 2 [NO SHADOW]
     <br>
      <div class="c-btn c-btn--primary">c-btn c-btn--primary</div>
      <div class="wc-container">
        <wc-level3></wc-level3>
      </div>            
    `;
  }

}

window.customElements.define('wc-level2', WCLevel2);
