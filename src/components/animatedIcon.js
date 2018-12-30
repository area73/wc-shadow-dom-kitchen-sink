import {LitElement, html} from '@polymer/lit-element';
import reset from 'wc-jss/generic/reset';
import shared from 'wc-jss/generic/shared';
import normalize from 'wc-jss/generic/normalize';
import {fontFamily} from 'wc-jss/generic/fonts';
import boxSize from 'wc-jss/generic/boxSizing';
import headings from 'wc-jss/elements/headings'
import images from 'wc-jss/elements/images'
import table from 'wc-jss/elements/tables'
import page from 'wc-jss/elements/page'

class AnimatedIcon extends LitElement {
  static get properties() {
    return {
      display: { type: String }
    };
  }


  static get styles() {
    return html`
      <style>
      
      ${reset}
      ${shared}
      ${normalize}
      ${fontFamily}
      ${boxSize}
      ${headings()}
      ${images}
      ${table}
      ${page}  
      
        @keyframes example {
          0%   {background-color: #000; color: #FFF}
          25%  {background-color: #888; color: #888}
          50%  {background-color: #FFF; color: #000}
          75%  {background-color: #888; color: #888}
          100% {background-color: #000; color: #FFF}
        }
       
        div {
          text-align: center;
          display:table-cell;
          vertical-align: middle;
          width: 100px;
          height: 100px;
          font-weight: bold;
          position: relative;
          background-color: red;
          animation-name: example;
          animation-duration: 4s;
          animation-iteration-count: infinite;
        }
      </style>
    `;
  }

  render() {
    return html`
      ${AnimatedIcon.styles}
      <div>CSS3</div>
    `;
  }

}

window.customElements.define('wc-animated-icon', AnimatedIcon);
