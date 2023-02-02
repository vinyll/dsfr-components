class Component extends HTMLElement {
  constructor() {
    super()
    const shadowRoot = this.attachShadow({ mode: "open" })
    shadowRoot.innerHTML = this.html
  }
}


class DSFRButton extends Component {
  get html() {
    return `
      <style>
        @import url('/dsfr.css');
      </style>
      <button class="fr-btn"><slot></slot></button>
    `
  }
}
customElements.define("dsfr-button", DSFRButton)

export default {
  DSFRButton
}
