/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

 import {LitElement, html, css} from 'lit';
 import {customElement, property, state} from 'lit/decorators.js';
 import {z} from 'zod';
 import {when} from "lit/directives/when.js";
 import {Person} from './person';
 
 @customElement('mi-formulario')
 export class MiFormulario extends LitElement {
   static override styles = css`
     :host {
       display: block;
       border: solid 1px gray;
       padding: 16px;
       max-width: 800px;
     }
   `;
 @property({type: Object})
 person: Person = new Person();

 mySchema = z.object({
  name: z.string().min(3, { message: "No puede estar vacío" }),
  mail: z.string().email({ message: "tiene que ser un mail valido" }),
  age: z.number().gte(18, {message: "Debe ser al menos 18"})
  });

@state()
  validation: any = {
  success: true,
    error: {
    issues: [],
    format : () => {}
    }
  };
  
@state()
  myError = new z.ZodError([]);

  onSubmit(e:Event){
    e.preventDefault();
    this.validation = this.mySchema.safeParse(this.person)
    if (!this.validation.success){
    console.log("no valida")
    }
   }
   
   override render() {
     return html`
      <h1>Formulario desde LitElement</h1>
        <form @submit="${this.onSubmit}">
          <div>
            <label for="name">Nombre</label>
            <input id="name" type="text" name="name" value="${this.person.name}"
              @input=${(e: Event) => {
              const target = e.target as HTMLInputElement;
              this.person.name = target.value;
              console.log(this.person.name);
              }
            }/>
            ${when(
              !this.validation.success && this.validation.error.format().name!=undefined,
              () => html`
              <div class="input-error" id="error-name">
                <span >${this.validation.error.format().name._errors}</span>
              </div>
              `,
              () => html``)}
            
          </div>
          <div>
            <label for="mail">E-Mail</label>
            <input id="mail" type="text" name="mail" value="${this.person.mail}"
              @input=${(e: Event) => {
                const target = e.target as HTMLInputElement;
                this.person.mail = target.value;
                console.log(this.person.mail);
                }
              }/>
              ${when(
                !this.validation.success && this.validation.error.format().mail!=undefined,
                () => html`
                <div class="input-error" id="error-age">
                  <span >${this.validation.error.format().mail._errors}</span>
                </div>
                `,
                () => html``)}
            
          </div>
          <div>
            <label for="age">Edad</label>
            <input id="age" type="number" name="age" value="${this.person.age}"
              @input=${(e: Event) => {
                const target = e.target as HTMLInputElement;
                this.person.age = +target.value;
                console.log(this.person.age);
                }
              }/>
              ${when(
                !this.validation.success && this.validation.error.format().age!=undefined,
                () => html`
                <div class="input-error" id="error-age">
                  <span >${this.validation.error.format().age._errors}</span>
                </div>
                `,
                () => html``)}
            
          </div>
          <div>
            <input type="submit" value="Enviar">
          </div>
        </form>
     `;
   }
 }
 
 declare global {
   interface HTMLElementTagNameMap {
     'mi-formualrio': MiFormulario;
   }
 }
 