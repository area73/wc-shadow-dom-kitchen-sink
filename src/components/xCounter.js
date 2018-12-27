import { LitElement, html } from '@polymer/lit-element';

class XCounter extends LitElement {
  static get properties() {
    return {
      value: { type: Number }
    }
  }

  // Alternative syntax, if using TypeScript or Babel experimental decorators and field assignments are available
  // @property({type: Number})
  // value = 0;

  constructor() {
    super();
    this.value = 0;
  }

  render() {
    return html`
      <style>
        button, p {
          display: inline-block;
        }
      </style>
      <button @click="${() => this.decrement()}" aria-label="decrement">-</button>
      <p>${this.value}</p>
      <button @click="${() => this.increment()}" aria-label="increment">+</button>
    `;
  }

  decrement() {
    this.value--;
    this._valueChanged();
  }

  increment() {
    this.value++;
    this._valueChanged();
  }

  _valueChanged() {
    this.dispatchEvent(new CustomEvent('valueChange', { detail: this.value }));
  }
}

customElements.define('x-counter', XCounter);
