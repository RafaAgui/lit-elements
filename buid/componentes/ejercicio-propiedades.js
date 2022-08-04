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
let EjercicioPropiedades = class EjercicioPropiedades extends LitElement {
    constructor() {
        super(...arguments);
        /**/
        this.valor = 'valor';
        this.contador = 0;
    }
    render() {
        return html `
       <h1>Ejercicio propiedades</h1>
       <h2>${this.valor}</h2>
       <p>${this.contador}</p>
     `;
    }
};
EjercicioPropiedades.styles = css `
   `;
__decorate([
    property()
], EjercicioPropiedades.prototype, "valor", void 0);
__decorate([
    property({
        type: Number
    })
], EjercicioPropiedades.prototype, "contador", void 0);
EjercicioPropiedades = __decorate([
    customElement('ejercicio-propiedades')
], EjercicioPropiedades);
export { EjercicioPropiedades };
//# sourceMappingURL=ejercicio-propiedades.js.map