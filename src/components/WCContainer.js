import {LitElement, html} from '@polymer/lit-element';

import './WCLevel1';

class WCContainer extends LitElement {
  static get properties() {
    return {

    };
  }

  static get styles() {
    return html`
      <style>
        :host {
          all: initial;
          background-color: aliceblue;
          display:block;
          padding: 10px;
        }
      </style>
    `;
  }

  render() {
    return html`
      ${WCContainer.styles}
      WC-CONTAINER
      <hr>
      <wc-level1></wc-level1>      
    `;
  }

}

window.customElements.define('wc-app-container', WCContainer);
