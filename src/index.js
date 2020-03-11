import { LitElement, html, css } from "lit-element";

export default class MyCounter extends LitElement {
  constructor() {
    super();
    this.count = 0;
  }

  static get styles() {
    return css`
      .large {
        font-size: 200%;
      }

      .span {
        width: 4rem;
        display: inline-block;
        text-align: center;
      }

      .btn {
        width: 64px;
        height: 64px;
        border: none;
        border-radius: 10px;
        background-color: seagreen;
        color: white;
      }
    `;
  }

  inc() {
    this.count++;
    this.update();
  }

  dec() {
    this.count--;
    this.update();
  }

  render() {
    return html`
      <div>
        <button class="large btn" @click="${this.dec}">-</button>
        <span class="large span">${this.count}</span>
        <button class="large btn" @click="${this.inc}">+</button>
      </div>
    `;
  }
}

customElements.define("my-counter", MyCounter);
