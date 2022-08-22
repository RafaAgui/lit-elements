import { LitElement } from 'lit';
interface User {
    completed: boolean;
    id: number;
    title: string;
    userId: number;
}
export declare class MyHttpRequest extends LitElement {
    static styles: import("lit").CSSResult;
    usuario: User;
    constructor();
    load(): Promise<void>;
    private clicked;
    private clickedPost;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'my-http-request': MyHttpRequest;
    }
}
export {};
//# sourceMappingURL=http-request.d.ts.map