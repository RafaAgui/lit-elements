/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
import { Madre } from "./madre";
export declare class Hija extends Madre {
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'hija-css': Hija;
    }
}
//# sourceMappingURL=hija.d.ts.map