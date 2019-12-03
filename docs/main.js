import {html, render} from "./web_modules/lit-html.js";

let sites = {
    'src': 'https://github.com/tmcmaster/tm-examples',
    'pika': 'https://www.pika.dev/npm/@wonkytech/tm-examples',
    'npm': 'https://www.npmjs.com/package/@wonkytech/tm-examples',
    'docs': 'https://github.com/tmcmaster/tm-examples#readme'
};

render(html`
    <style>
        body {
          background-color: lightgray;
          padding: 0;
          margin: 0;
        } 
    </style>
    <tm-sites .sites="${sites}"></tm-sites>
`, document.querySelector('body'));