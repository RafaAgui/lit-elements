/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
import { LitElement } from 'lit';
export declare class MiElementoAnidador extends LitElement {
    static styles: import("lit").CSSResult;
    name: string;
    protected render(): import("lit-html").TemplateResult<1>;
    private _loginListener;
}
declare global {
    interface HTMLElementTagNameMap {
        'mi-elemento-anidador': MiElementoAnidador;
    }
}
//# sourceMappingURL=mi-elemento-anidador.d.ts.map