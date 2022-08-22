var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import "./Contenido";
let Detalle = class Detalle extends LitElement {
    constructor() {
        super(...arguments);
        this.item = "";
    }
    render() {
        return html `
      <li>
          ${this.item}
      </li>
      <slot></slot>
    `;
    }
};
Detalle.styles = css `
    
  `;
__decorate([
    property({ type: String })
], Detalle.prototype, "item", void 0);
Detalle = __decorate([
    customElement('mi-detalle')
], Detalle);
export { Detalle };
//# sourceMappingURL=mi-detalle.js.map