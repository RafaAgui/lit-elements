/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
import { LitElement } from 'lit';
import { z } from 'zod';
import { Person } from './person';
export declare class MiFormulario extends LitElement {
    static styles: import("lit").CSSResult;
    person: Person;
    mySchema: z.ZodObject<{
        name: z.ZodString;
        mail: z.ZodString;
        age: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        name: string;
        mail: string;
        age: number;
    }, {
        name: string;
        mail: string;
        age: number;
    }>;
    validation: any;
    myError: z.ZodError<any>;
    onSubmit(e: Event): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'mi-formualrio': MiFormulario;
    }
}
//# sourceMappingURL=mi-formulario.d.ts.map