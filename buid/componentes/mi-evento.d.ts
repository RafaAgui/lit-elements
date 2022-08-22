/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
import { LitElement } from 'lit';
export declare class MiEvento extends LitElement {
    static styles: import("lit").CSSResult;
    protected render(): import("lit-html").TemplateResult<1>;
    const MessageEvent: CustomEvent<{
        from: string;
        message: string;
    }>;
}
declare global {
    interface HTMLElementTagNameMap {
        'mi-evento': MiEvento;
    }
}
//# sourceMappingURL=mi-evento.d.ts.map