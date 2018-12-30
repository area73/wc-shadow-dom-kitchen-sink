import {LitElement, html} from '@polymer/lit-element';
import {store} from '../config/store';
import reset from 'wc-jss/generic/reset';
import shared from 'wc-jss/generic/shared';
import normalize from 'wc-jss/generic/normalize';
import {fontFamily} from 'wc-jss/generic/fonts';
import boxSize from 'wc-jss/generic/boxSizing';
import headings from 'wc-jss/elements/headings'


class WcAppNoDOM extends LitElement {
  static get properties() {
    return {};
  }

  /**
   * Haking shadowDOM original method initialize()
   */
  initialize() {
    this.renderRoot = this;
    this._saveInstanceProperties();
  }

  goTo(path) {
    store.dispatch(navigate(path));
  }


  static get styles() {
    return html`
    <style>
        ${reset}
        ${boxSize}
        ${normalize}
        ${shared}
        ${fontFamily}
        ${headings()}
        
        .app-bar {
          color: white;
          background-color: #2196f3;
          font-size: 20px;
          padding: 16px;
          text-align: center;
        }
  
        .app-content {
          padding: 16px;
        }
  
        .nav-bar {
          background-color: white;
          text-align: center;
        }
  
        .nav-bar a {
          display: inline-block;
          padding: 16px;
        }
        
    </style>`;

  }

  render() {
    return html`
      ${WcAppNoDOM.styles}
      <div class="app-bar">Main Web Component App</div>
      <nav class="nav-bar">
        <a href="/">home</a>
        <a href="/products2/1/shirt">products</a>
        <a href="/about2">about</a>
        <a href="/contact">contact</a>
        <a href="/counter/38">counter</a>
        <a href="/not-exist">not exist</a>
      </nav>
  
      <div class="app-content">
        <lit-route><h1>404</h1></lit-route>
        <lit-route path="/">
          <h1>Home</h1>
        </lit-route>
        <lit-route path="/products2/:id?/:name?" component="my-product"></lit-route>
        <lit-route path="/counter/:value?" component="x-counter"></lit-route>
        <lit-route path="/countery/:value?" component="x-counter"></lit-route>
        <lit-route path="/about2">
          <h1>About</h1>
        </lit-route>
        <lit-route path="/contact">
          <h1>Contact</h1>
          <button @click="${() => this.goTo('/about')}">learn more about us</button>
        </lit-route>
      </div>
					`;
  }
}

window.customElements.define('wc-app-no-dom', WcAppNoDOM);



