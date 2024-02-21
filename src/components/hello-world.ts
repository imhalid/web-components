// web component
class HelloWorld extends HTMLElement {
  constructor() {
    super();
    this.name = "";
  }

  // component attributes
  static get observedAttributes() {
    return ["name"];
  }

  // attribute change
  attributeChangedCallback(property, oldValue, newValue) {
    if (oldValue === newValue) return;
    this[property] = newValue;
  }

  // connect component
  connectedCallback() {
    const shadow = this.attachShadow({ mode: "open" });
    console.log(shadow);
    shadow.innerHTML = `
      <style>

      :host {
        background-color: green;
        font-size: 2rem;
        font-weight: bold;
      }

      ::slotted(p) {
        background-color: yellow;
      }

        </style>

        <slot></slot>
        `;
  }
}

// register component
customElements.define("hello-world", HelloWorld);
