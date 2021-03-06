import {LitElement, html} from '@polymer/lit-element';
import {connectRouter, navigate} from 'lit-redux-router';
import {createStore, compose as origCompose, combineReducers} from 'redux';
import {lazyReducerEnhancer} from 'pwa-helpers';
import reset from 'wc-jss/generic/reset';
import shared from 'wc-jss/generic/shared';
import normalize from 'wc-jss/generic/normalize';
import {fontFamily} from 'wc-jss/generic/fonts';
import boxSize from 'wc-jss/generic/boxSizing';
import {store} from '../config/store';
import headings from 'wc-jss/elements/headings'
import './navBar';

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
    </style>`;

  }

  render() {
    return html`
      ${WcApp.styles}
      <div class="app-bar">Main Web Component App</div>
      <wc-nav-bar display="sloted">
        [sloted]
        <nav class="nav-bar">
          <a href="/">home</a>
          <a href="/products/1/shirt">products</a>
          <a href="/about">about</a>
          <a href="/contact">contact</a>
          <a href="/counter/28">counter</a>
          <a href="/not-exist">not exist</a>
        </nav>
      </wc-nav-bar>
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



