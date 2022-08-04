/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
import { LitElement } from 'lit';
export declare class MiSlotChachi extends LitElement {
    static styles: import("lit").CSSResult;
    items: Array<{
        seccion: string;
        parte: string;
    }>;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'mi-slot': MiSlotChachi;
    }
}
//# sourceMappingURL=mi-slot.d.ts.map