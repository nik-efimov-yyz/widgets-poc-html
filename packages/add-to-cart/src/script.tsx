import * as React from 'react';
import * as ReactDOM from "react-dom";
import { Widget } from './Widget';
import styles from './styles.css'

class AddToCartWebComponent extends HTMLElement {
  connectedCallback() {
    const root = this.attachShadow({ mode: 'closed'})
    const mountNode = document.createElement('div')
    mountNode.className = "widget-root"
    root.appendChild(mountNode)

    // Attach styles
    const styleTag = document.createElement('style')
    styleTag.innerHTML = styles
    root.appendChild(styleTag)

    ReactDOM.render(<Widget product={this.dataset.product as string} />, mountNode);
  }
}

customElements.define('instacart-add-to-cart', AddToCartWebComponent)