/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
let MinCondiciones = class MinCondiciones extends LitElement {
    constructor() {
        super(...arguments);
        this.numerito = 10;
    }
    render() {
        return this.numerito == 10
            ? html `<h2>El número vale: ${this.numerito}</h2>`
            : html `<h2>El número no vale 10</h2>`;
    }
};
MinCondiciones.styles = css `  `;
__decorate([
    property({ type: Number })
], MinCondiciones.prototype, "numerito", void 0);
MinCondiciones = __decorate([
    customElement('mis-condiciones')
], MinCondiciones);
export { MinCondiciones };
//# sourceMappingURL=mis-condiciones.js.map