var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
let MyHttpRequest = class MyHttpRequest extends LitElement {
    constructor() {
        super();
        this.usuario = {
            completed: false,
            id: 1,
            title: "",
            userId: 1
        };
        this.clicked = () => {
            this.load();
        };
        this.clickedPost = () => {
            const myRequest = fetch('https://jsonplaceholder.typicode.com/posts', {
                // Adding method type
                method: "POST",
                // Adding body or contents to send
                body: JSON.stringify({
                    title: "foo",
                    body: "bar",
                    userId: 1
                }),
                // Adding headers to the request
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            });
            // Converting to JSON
            myRequest.then(async (response) => {
                const resJson = await response.json();
                console.log(resJson);
            });
            // Displaying results to console
            myRequest.catch(error => console.log(error));
        };
    }
    async load() {
        const myRequest = fetch('https://jsonplaceholder.typicode.com/todos/1');
        myRequest.then(async (response) => {
            console.log(response);
            const miJson = await response.json();
            console.log(miJson);
        })
            .catch(error => {
            console.log(error);
        });
    }
    render() {
        return html `
      <h1>Mi Http Request</h1>
      <p><button id="http-load" @click="${this.clicked}">Load Get</button></p>
      <p><button id="http-load" @click="${this.clickedPost}">Load Post</button></p>
 
      <slot></slot>
    `;
    }
};
MyHttpRequest.styles = css `
  `;
__decorate([
    property({ type: Object })
], MyHttpRequest.prototype, "usuario", void 0);
MyHttpRequest = __decorate([
    customElement('my-http-request')
], MyHttpRequest);
export { MyHttpRequest };
//# sourceMappingURL=http-request.js.map