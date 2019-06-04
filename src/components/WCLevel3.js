import {LitElement, html} from '@polymer/lit-element';

class WCLevel3 extends LitElement {
  static get properties() {
      return {}
    };


  /**
   * Haking shadowDOM original method initialize()
   */

  initialize() {
    this.renderRoot = this;
    this._saveInstanceProperties();
  }

  render() {
    return html`
     WC-LEVEL 3 [NO SHADOW]
     <br>
     <div class="c-btn c-btn--primary">c-btn c-btn--primary</div>        
    `;
  }
}

window.customElements.define('wc-level3', WCLevel3);
