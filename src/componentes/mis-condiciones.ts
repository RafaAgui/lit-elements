/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

 import {LitElement, html, css} from 'lit';
 import {customElement, property} from 'lit/decorators.js';
 
 @customElement('mis-condiciones')
 export class MinCondiciones extends LitElement {
   static override styles = css`  `;
 
  @property({type: Number})
  numerito = 10;
 
 
  override render() {
    return this.numerito == 10
    ? html`<h2>El número vale: ${this.numerito}</h2>`
    : html`<h2>El número no vale 10</h2>`;
    }
  }
  
 declare global {
   interface HTMLElementTagNameMap {
     'mis-condiciones': MinCondiciones;
   }
 }
 