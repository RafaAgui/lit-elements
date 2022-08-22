import { LitElement } from 'lit';
interface Partido {
    dipu: string;
    imagen: string;
    nombre: string;
}
export declare class MiPeticion extends LitElement {
    static styles: import("lit").CSSResult;
    partidos: Partido[];
    constructor();
    load(): Promise<void>;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'mi-peticion': MiPeticion;
    }
}
export {};
//# sourceMappingURL=mi-peticion.d.ts.map