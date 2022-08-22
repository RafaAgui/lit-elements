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
import { repeat } from 'lit/directives/repeat.js';
let MiSlotChachi = class MiSlotChachi extends LitElement {
    constructor() {
        super(...arguments);
        this.items = [
            { seccion: "tronco", parte: "cuello" },
            { seccion: "tronco", parte: "cuerpo" },
            { seccion: "extremidades", parte: "brazo" },
            { seccion: "extremidades", parte: "pierna" }
        ];
    }
    render() {
        return html `
      <table>
        <tr>
          <th>     <slot name="cabeza"></slot></th>
        </tr>
        
        ${repeat(this.items, (item) => html `<tr><td>${item.seccion}</td> <td>${item.parte}</td></tr>`)}
  
        <tr>
          <td>     <slot name="pie"></slot></td>
        </tr>
      </table>
      `;
    }
};
MiSlotChachi.styles = css `
   :host{
    color: green;
   }  
   :host(.red){
    color: red;
   }
   ::slotted(h2) { 
    text-transform: uppercase;
    color: blue; 
  }
   td{
    border: 1px solid black;
   }
   `;
__decorate([
    property()
], MiSlotChachi.prototype, "items", void 0);
MiSlotChachi = __decorate([
    customElement('mi-slot')
], MiSlotChachi);
export { MiSlotChachi };
//# sourceMappingURL=mi-slot.js.map