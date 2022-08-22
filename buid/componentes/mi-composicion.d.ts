import { LitElement } from 'lit';
import "./mi-detalle";
import "./form";
export declare class MiComposicion extends LitElement {
    static styles: import("lit").CSSResult;
    myarray: string[];
    manejaSubmit(e: Event): void;
    private _loginListener;
    addItemByString(name: string): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'mi-composicion': MiComposicion;
    }
}
//# sourceMappingURL=mi-composicion.d.ts.map