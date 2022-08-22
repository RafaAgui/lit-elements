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
import { customElement, query } from 'lit/decorators.js';
let MiElementoAnidado = class MiElementoAnidado extends LitElement {
    render() {
        return html `
    <p>Name: <input></p>
    <p><button @click=${this._dispatchLogin}>Login</button></p>
    `;
    }
    _dispatchLogin() {
        const name = this._input.value.trim();
        if (name) {
            const options = {
                detail: { name },
                bubbles: true,
                composed: true
            };
            this.dispatchEvent(new CustomEvent('mylogin', options));
        }
    }
};
MiElementoAnidado.styles = css `
   `;
__decorate([
    query('input', true)
], MiElementoAnidado.prototype, "_input", void 0);
MiElementoAnidado = __decorate([
    customElement('mi-elemento-anidado')
], MiElementoAnidado);
export { MiElementoAnidado };
//# sourceMappingURL=mi-elemento-anidado.js.map