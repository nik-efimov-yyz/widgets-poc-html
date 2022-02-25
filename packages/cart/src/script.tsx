import * as React from 'react';
import * as ReactDOM from "react-dom";
import { Widget } from './Widget';
import styles from './styles.css'

class AddToCartWebComponent extends HTMLElement {
  connectedCallback() {
    const root = this.attachShadow({ mode: 'closed'})
    const mountNode = document.createElement('span')
    root.appendChild(mountNode)

    // Attach styles
    const styleTag = document.createElement('style')
    styleTag.innerHTML = styles
    root.appendChild(styleTag)

    ReactDOM.render(<Widget />, mountNode);
  }
}

customElements.define('instacart-cart', AddToCartWebComponent)