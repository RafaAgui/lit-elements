/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

 import {LitElement, html, css} from 'lit';
 import {customElement} from 'lit/decorators.js';
 
 @customElement('madre-css')
 export class Madre extends LitElement {
   static override styles = css`
      h1 {
      border: 1px solid gray;
      padding: 8px;
      }
   `;
 
/**/

   override render() {
     return html`
       <h1>contenido de la madre</h1>
     `;
   }
  }
  
 
 declare global {
   interface HTMLElementTagNameMap {
     'madre-css': Madre;
   }
 }