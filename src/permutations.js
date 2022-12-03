import { LitElement, html } from "lit";


class Permutation extends LitElement {

    static get properties() {
        return {
            s1: { type: String },
            s2: { type: String },
        };
    }


    render() {
        const permutations = _findPermutations(this.s1, this.s2);
        return permutations.length == 0 ? html`${this.s1} is not contained in ${this.s2}` :
            html` 
      <div>${this.s1} could be found at the following substrings of ${this.s2}: </div> 
      <ul>
        ${permutations.map(permutation => html`<li>${permutation}</li>`)}
      </ul>
      `;
    }

    _findPermutations(s1, s2) {
        // todo: find an array of substrings of s2 that are valid permutations of s1
        return [];
    };
}

// Register your element to custom elements registry
customElements.define("permutation-component", Permutation);
