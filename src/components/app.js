import {LitElement, html} from '@polymer/lit-element';
import {connectRouter, navigate} from 'lit-redux-router';
import {createStore, compose as origCompose, combineReducers} from 'redux';
import {lazyReducerEnhancer} from 'pwa-helpers';
import reset from 'wc-jss/generic/reset';
import headings from 'wc-jss/elements/headings'

const compose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || origCompose;
const store = createStore(
    (state, action) => state, compose(lazyReducerEnhancer(combineReducers)),
);

connectRouter(store);

class WcApp extends LitElement {
  static get properties() {
    return {};
  }

  goTo(path) {
    store.dispatch(navigate(path));
  }

  static get styles() {
    return html`
    <style>
        ${reset}
        ${headings()}
        :host {
          font-family: sans-serif;
          font-weight: 300;
        }
  
        a {
          text-decoration: none;
          color: inherit;
        }
  
        a:hover {
          text-decoration: underline;
        }
  
        h1 {
          margin-top: 0;
          margin-bottom: 16px;
        }
  
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
      ${WcApp.styles}
      <div class="app-bar">Example App</div>
      <nav class="nav-bar">
        <a href="/">home</a>
        <a href="/products/1/shirt">products</a>
        <a href="/about">about</a>
        <a href="/contact">contact</a>
        <a href="/counter/28">counter</a>
        <a href="/not-exist">not exist</a>
      </nav>
  
      <div class="app-content">
        <lit-route><h1>404</h1></lit-route>
        <lit-route path="/">
          <h1>Home</h1>
        </lit-route>
        <lit-route path="/products/:id?/:name?" component="my-product"></lit-route>
        <lit-route path="/counter/:value?" component="x-counter"></lit-route>
        <lit-route path="/countery/:value?" component="x-counter"></lit-route>
        <lit-route path="/about">
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

window.customElements.define('wc-app', WcApp);



