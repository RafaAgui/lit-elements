import { LitElement } from 'lit';
export declare class Form extends LitElement {
    static styles: import("lit").CSSResult;
    aText: string;
    onSubmit(e: Event): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'mi-form': Form;
    }
}
//# sourceMappingURL=form.d.ts.map