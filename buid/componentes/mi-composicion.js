var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import "./mi-detalle";
import "./form";
let MiComposicion = class MiComposicion extends LitElement {
    constructor() {
        super(...arguments);
        this.myarray = [
            "hola",
            "mundo"
        ];
    }
    manejaSubmit(e) {
        e.preventDefault();
        const formulario = e.target;
        console.log(formulario);
        const primerInput = formulario.children[0];
        console.log(primerInput.localName);
        console.log(primerInput.value);
        // no podemos enviar el dato al padre, ya que este método se ejecuta desde el hijo
        //this.addItemByString(primerInput.value);
    }
    _loginListener(e) {
        console.log("captura evento desde listado");
        this.addItemByString(e.detail.name);
    }
    addItemByString(name) {
        this.myarray = this.myarray.concat([name]);
    }
    render() {
        return html `
      <h1>Listado</h1>

        <p @mylogin=${this._loginListener}>
          <slot></slot>
        </p>

        <ul>
          ${this.myarray.map((cadena) => html `<mi-detalle item="${cadena}">
                      
                  </mi-detalle>`)}
      </ul>
     `;
    }
};
MiComposicion.styles = css `
     :host {
       display: block;
       border: solid 1px gray;
       padding: 16px;
       max-width: 800px;
     }
   `;
__decorate([
    property({ type: Array })
], MiComposicion.prototype, "myarray", void 0);
MiComposicion = __decorate([
    customElement('mi-composicion')
], MiComposicion);
export { MiComposicion };
//# sourceMappingURL=mi-composicion.js.map