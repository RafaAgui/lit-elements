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
let MiEventoCaptura = class MiEventoCaptura extends LitElement {
    constructor() {
        super(...arguments);
        this.contador = '';
    }
    render() {
        return html `
      <p @count-changed=${this._countListener}></p>
      <p>Login: ${this.contador}</p>
     `;
    }
    _countListener(e) {
        this.contador = e.detail.contador;
    }
};
MiEventoCaptura.styles = css `
     :host {
       display: block;
       border: solid 1px gray;
       padding: 16px;
       max-width: 800px;
     }
   `;
__decorate([
    property()
], MiEventoCaptura.prototype, "contador", void 0);
MiEventoCaptura = __decorate([
    customElement('mi-evento-captura')
], MiEventoCaptura);
export { MiEventoCaptura };
//# sourceMappingURL=mi-evento-captura.js.map