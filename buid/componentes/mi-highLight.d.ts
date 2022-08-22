import { LitElement } from 'lit';
declare type Constructor<T> = new (...args: any[]) => T;
export declare class HighlightableInterface {
    highlight: boolean;
    renderHighlight(content: unknown): unknown;
}
export declare const Highlightable: <T extends Constructor<LitElement>>(superClass: T) => Constructor<HighlightableInterface> & T;
export {};
//# sourceMappingURL=mi-highLight.d.ts.map