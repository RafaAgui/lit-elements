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
let MiElementoAnidador = class MiElementoAnidador extends LitElement {
    constructor() {
        super(...arguments);
        this.name = '';
    }
    render() {
        return html `
 <p @mylogin=${this._loginListener}><slot></slot></p>
 <p>Login: ${this.name}</p>`;
    }
    _loginListener(e) {
        this.name = e.detail.name;
    }
};
MiElementoAnidador.styles = css `
   :host{
    display:block;
    background: #ddd;
    padding: 1rem;
   }  
   `;
__decorate([
    property()
], MiElementoAnidador.prototype, "name", void 0);
MiElementoAnidador = __decorate([
    customElement('mi-elemento-anidador')
], MiElementoAnidador);
export { MiElementoAnidador };
//# sourceMappingURL=mi-elemento-anidador.js.map