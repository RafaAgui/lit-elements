/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

 import {LitElement, html, css} from 'lit';
 import {customElement, property} from 'lit/decorators.js';
 
 @customElement('mi-listado')
 export class MiListado extends LitElement {
   static override styles = css` 
    li:nth-child(even){
      color: red;
    }
    `;
 
   @property() 
   curso = ['Rafa', 'Andrea', 'Musta', 'Iván', 'Daniel', 'José', 'Capi', 'Chema'];
 
 
  override render() {
    return html`
      <slot></slot>
      <ul>
        ${this.curso.map((participantes) =>
            html`<li>${participantes}</li>`
          )}
      </ul>
      `;
    }
  }
  
 declare global {
   interface HTMLElementTagNameMap {
     'mi-listado': MiListado;
   }
 }
 