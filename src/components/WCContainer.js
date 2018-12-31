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
          display:block;
          padding: 10px;
          margin: 10px;
          border: 3px double #999;
        }
        .c-btn {
          display: inline-block;
          vertical-align: middle;
          font: inherit;
          text-align: center;
          margin: 0;
          cursor: pointer;
          padding: 12px 24px;
          transition: all 300ms ease-in-out;
          border-radius: 16px; 
        }
        .c-btn--primary {
          background-color: coral; 
          }
        .c-btn--primary, 
        .c-btn--primary:hover, 
        .c-btn--primary:active, 
        .c-btn--primary:focus {
          text-decoration: none;
          color: #fff;
        }
        .c-btn--primary:hover, 
        .c-btn--primary:focus {
          background-color: indianred; 
        }
        
        .wc-container {
          margin: 10px 0px 10px 10px;
          padding: 10px 0px 10px 10px;
          border: 2px dashed #ccc ;
        }
        .wc-container.wc-container--slotted {
          border: 2px dashed #3774a2;
        }
        
      </style>
    `;
  }

  render() {
    return html`
      ${WCContainer.styles}
      WC-CONTAINER [SHADOW DOM]
      <br>
      Redefine styles 
      <br>
      <div class="c-btn c-btn--primary">c-btn c-btn--primary</div>
      <div class="wc-container wc-container--slotted">
        <slot></slot>
      </div>
      <div class="wc-container">
        <wc-level1>
          <div class="c-btn c-btn--primary">c-btn c-btn--primary</div>
        </wc-level1>
      </div>
    `;
  }

}

window.customElements.define('wc-app-container', WCContainer);
