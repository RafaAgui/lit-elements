/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

 import {LitElement, html, css} from 'lit';
 import {customElement} from 'lit/decorators.js';
 import {Madre} from "./madre";
 
 @customElement('hija-css')
 export class Hija extends Madre {
   static override styles = css`
    h1 {
      color: red;
      }
   `;
 
/**/

   override render() {
     return html`
       <h1>Contenido de la hija</h1>

     `;
   }
  }
  
 
 declare global {
   interface HTMLElementTagNameMap {
     'hija-css': Hija;
   }
 }