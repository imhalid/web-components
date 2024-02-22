// web component
class HelloWorld extends HTMLElement {
  name: string;
  constructor() {
    super();
    this.name = "";
  }

  // component attributes
  static get observedAttributes() {
    return ["name"];
  }

  // attribute change
  attributeChangedCallback(
    property: string | number,
    oldValue: any,
    newValue: any
  ) {
    if (oldValue === newValue) return;
    (this as any)[property] = newValue;
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
      
      
      ::slotted(*) {
        background-color: yellow;
      } 

      ::slotted(p) {
        background-color: blue;
      }
     
      /* all tags inside the slot */

        </style>

        <slot></slot>
        `;
  }
}

// register component
customElements.define("hello-world", HelloWorld);
