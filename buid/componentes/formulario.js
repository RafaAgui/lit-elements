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
import { z } from 'zod';
import { Person } from './person';
let MiFormulario = class MiFormulario extends LitElement {
    constructor() {
        super(...arguments);
        this.person = new Person();
        this.mySchema = z.object({
            name: z.string().min(1, { message: "No puede estar vacío" }),
            age: z.number().gt(0, { message: "Debe ser al menos 1" })
        });
        this.validation = {
            success: true,
            error: {
                issues: [],
                format: () => { }
            }
        };
        this.myError = new z.ZodError([]);
    }
    onSubmit(e) {
        e.preventDefault();
        console.log(this.person.name);
        this.validation = this.mySchema.safeParse(this.person);
        console.log(this.validation.success);
        if (!this.validation.success) {
            console.log("no valida");
            console.log(this.validation.error.format());
        }
    }
    render() {
        return html `
      <h1>Formulario desde LitElement</h1>
        <form @submit="${this.onSubmit}">
          <div>
            <label for="name">Nombre</label>
            <input id="name" type="text" name="name" value="${this.person.name}"
              @input=${(e) => {
            const target = e.target;
            this.person.name = target.value;
            console.log(this.person.name);
        }}
            ${when(!this.validation.success && this.validation.error.format().name != undefined, () => html `
              <div class="input-error" id="error-name">
                <span >${this.validation.error.format().name._errors}</span>
              </div>
              `, () => html ``)}
            />
          </div>
          <div>
            <label for="age">Edad</label>
            <input id="age" type="number" name="age" value="${this.person.age}"
              @input=${(e) => {
            const target = e.target;
            this.person.age = target.value;
            console.log(this.person.age);
        }}
              ${when(!this.validation.success && this.validation.error.format().age != undefined, () => html `
                <div class="input-error" id="error-age">
                  <span >${this.validation.error.format().age._errors}</span>
                </div>
                `, () => html ``)}
            />
          </div>
          <div>
            <input type="submit" value="Enviar">
          </div>
        </form>
     `;
    }
};
MiFormulario.styles = css `
     :host {
       display: block;
       border: solid 1px gray;
       padding: 16px;
       max-width: 800px;
     }
   `;
__decorate([
    property({ type: Object })
], MiFormulario.prototype, "person", void 0);
__decorate([
    state()
], MiFormulario.prototype, "validation", void 0);
__decorate([
    state()
], MiFormulario.prototype, "myError", void 0);
MiFormulario = __decorate([
    customElement('mi-formulario')
], MiFormulario);
export { MiFormulario };
//# sourceMappingURL=formulario.js.map