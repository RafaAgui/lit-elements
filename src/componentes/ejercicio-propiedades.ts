/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

 import {LitElement, html, css} from 'lit';
 import {customElement, property} from 'lit/decorators.js';
 
 @customElement('ejercicio-propiedades')
 export class EjercicioPropiedades extends LitElement {
   static override styles = css`
   `;
 
/**/
@property()
valor = 'valor';

@property({
  type: Number
})
contador = 0;

   override render() {
     return html`
       <h1>Ejercicio propiedades</h1>
       <h2>${this.valor}</h2>
       <p>${this.contador}</p>
     `;
   }
  }
  
 
 declare global {
   interface HTMLElementTagNameMap {
     'ejercicio-propiedades': EjercicioPropiedades;
   }
 }