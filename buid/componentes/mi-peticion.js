var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
let MiPeticion = class MiPeticion extends LitElement {
    constructor() {
        super();
        this.partidos = [];
        this.load();
    }
    async load() {
        const response = await fetch('https://cursosdedesarrollo.com/pactometro/resultados.json');
        this.partidos = await response.json();
    }
    render() {
        return html `
        <ul>
          ${this.partidos.map((item) => html `<li id="partido-${item.nombre}">
                    <p>${item.nombre}: ${item.dipu}</p> 
                    <p class="img">
                      <img src="https://cursosdedesarrollo.com/pactometro/img/${item.imagen}"/>
                    </p>
                  </li>`)}
      </ul>
     `;
    }
};
MiPeticion.styles = css `
     :host {
       display: block;
       border: solid 1px gray;
       padding: 16px;
       max-width: 800px;
     }
     .img{
        width: 80px;
      }

    .img img{
      width: 100%;
      height: auto;
    }
   `;
__decorate([
    property({ type: Object })
], MiPeticion.prototype, "partidos", void 0);
MiPeticion = __decorate([
    customElement('mi-peticion')
], MiPeticion);
export { MiPeticion };
//# sourceMappingURL=mi-peticion.js.map