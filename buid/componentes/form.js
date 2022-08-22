var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
let Form = class Form extends LitElement {
    constructor() {
        super(...arguments);
        this.aText = "";
    }
    onSubmit(e) {
        e.preventDefault();
        console.log(this.aText);
        const options = {
            detail: { name: this.aText },
            bubbles: true,
            composed: true
        };
        this.dispatchEvent(new CustomEvent('mylogin', options));
    }
    render() {
        return html `
      <h1>Mi Form</h1>
      <form @submit="${this.onSubmit}">
          <input type="text" .value="${this.aText}"/>
          <input type="submit" value="Enviar"/>
      </form>
      <slot></slot>
    `;
    }
};
Form.styles = css `
    
  `;
__decorate([
    property({ type: String })
], Form.prototype, "aText", void 0);
__decorate([
    property({ type: Function })
], Form.prototype, "onSubmit", null);
Form = __decorate([
    customElement('mi-form')
], Form);
export { Form };
//# sourceMappingURL=form.js.map