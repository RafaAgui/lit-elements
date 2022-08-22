import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

 interface Partido{
  dipu: string;
  imagen: string;
  nombre: string
}
 
 @customElement('mi-peticion')
 export class MiPeticion extends LitElement {
   static override styles = css`
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

  @property({type: Object})
  partidos: Partido[] = [];

  constructor() {
      super();
      this.load();

  }

  async load() {
    const response = await fetch('https://cursosdedesarrollo.com/pactometro/resultados.json');
    this.partidos = await response.json();
  }


   override render() {
     return html`
        <ul>
          ${this.partidos.map(
            (item) =>
              html`<li id="partido-${item.nombre}">
                    <p>${item.nombre}: ${item.dipu}</p> 
                    <p class="img">
                      <img src="https://cursosdedesarrollo.com/pactometro/img/${item.imagen}"/>
                    </p>
                  </li>`
          )}
      </ul>
     `;
   }
 }
 
 declare global {
   interface HTMLElementTagNameMap {
     'mi-peticion': MiPeticion;
   }
 }
 