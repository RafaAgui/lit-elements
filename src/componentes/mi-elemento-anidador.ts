/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

 import {LitElement, html, css} from 'lit';
 import {customElement, property} from 'lit/decorators.js';
 
 @customElement('mi-elemento-anidador')
 export class MiElementoAnidador extends LitElement {
   static override styles = css`
   :host{
    display:block;
    background: #ddd;
    padding: 1rem;
   }  
   `;
 
 @property() name = '';
 protected override render() {
 return html`
 <p @mylogin=${this._loginListener}><slot></slot></p>
 <p>Login: ${this.name}</p>`;
 }
 private _loginListener(e: CustomEvent) {
 this.name = e.detail.name;
 }
}
 
 declare global {
   interface HTMLElementTagNameMap {
     'mi-elemento-anidador': MiElementoAnidador;
   }
 }