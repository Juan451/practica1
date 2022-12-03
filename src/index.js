import { LitElement, html } from "lit";

class BasicSetup extends LitElement {
    static get properties() {
        return {
            fetchedData: { type: Array },
        };
    }

    //https://lit.dev/docs/components/lifecycle/#connectedcallback
    connectedCallback() {
        super.connectedCallback();
    }

    render() {
        if (this.fetchedData) {
            // todo: render the data!
        } else {
            return html`<div>Hello world!!</div> `;
        }
    }
}

// Register your element to custom elements registry
customElements.define("basic-setup", BasicSetup);
