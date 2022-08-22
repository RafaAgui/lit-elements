/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

 import {LitElement, html, css} from 'lit';
 import {customElement, property} from 'lit/decorators.js';
 import {repeat} from 'lit/directives/repeat.js';
 
 @customElement('mi-slot')
 export class MiSlotChachi extends LitElement {
   static override styles = css`
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
 
   @property()
   items: Array<{seccion: string, parte: string}> = [
   { seccion: "tronco", parte: "cuello"},
   { seccion: "tronco", parte: "cuerpo"},
   { seccion: "extremidades", parte: "brazo"},
   { seccion: "extremidades", parte: "pierna"}
   ];
   override render() {
    return html`
      <table>
        <tr>
          <th>     <slot name="cabeza"></slot></th>
        </tr>
        
        ${repeat(
          this.items,
          (item) =>
          html`<tr><td>${item.seccion}</td> <td>${item.parte}</td></tr>`
          )}
  
        <tr>
          <td>     <slot name="pie"></slot></td>
        </tr>
      </table>
      `;
    }
  }
 /*
  override render() {
    return html`
      <slot name="cabeza"></slot>
        <ul>
          ${repeat(
          this.items,
          (item) =>
          html`<li>${item.seccion}: ${item.parte}</li>`
          )}
        </ul>
      <slot name="pie"></slot>
      `;
    }
  }
  */
 declare global {
   interface HTMLElementTagNameMap {
     'mi-slot': MiSlotChachi;
   }
 }
 