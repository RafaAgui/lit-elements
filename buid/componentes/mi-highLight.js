var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { css, html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { property } from 'lit/decorators/property.js';
/* playground-fold-end */
export const Highlightable = (superClass) => {
    var _a;
    class HighlightableElement extends superClass {
        constructor() {
            super(...arguments);
            // ...a public `highlight` property/attribute...
            this.highlight = true;
        }
        // ...and a helper render method:
        renderHighlight(content) {
            return html `
          <div class=${classMap({ highlight: this.highlight })}>
            ${content}
          </div>`;
        }
    }
    // Adds some styles...
    HighlightableElement.styles = [
        (_a = superClass.styles) !== null && _a !== void 0 ? _a : [],
        css `.highlight { background: #00f; }`
    ];
    __decorate([
        property({ type: Boolean })
    ], HighlightableElement.prototype, "highlight", void 0);
    return HighlightableElement;
};
//# sourceMappingURL=mi-highLight.js.map