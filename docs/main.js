import {html, render} from "./web_modules/lit-html.js";

let sites0 = {};

let sites1 = {
    'src': 'https://github.com/tmcmaster/tm-sites'
};

let sites2 = {
    'src': 'https://github.com/tmcmaster/tm-sites',
    'pika': 'https://www.pika.dev/npm/@wonkytech/tm-sites'
};

let sites4 = {
    'src': 'https://github.com/tmcmaster/tm-sites',
    'pika': 'https://www.pika.dev/npm/@wonkytech/tm-sites',
    'npm': 'https://www.npmjs.com/package/@wonkytech/tm-sites',
    'docs': 'https://github.com/tmcmaster/tm-sites#readme'
};

render(html`
    <style>
        body {
          background-color: white;
          padding: 0;
          margin: 0;
        } 
    </style>
    <tm-examples heading="tm-sites" .sites="${sites4}">
    
        <section title="No Sites">
            <script>
                let sites0 = {};
            </script>
            <tm-sites .sites="${sites0}"></tm-sites>
        </section>
        
        <section title="One Sites">
            <script>
                let sites1 = {
                    'src': 'https://github.com/tmcmaster/tm-examples'
                };
            </script>
             <tm-sites .sites="${sites1}"></tm-sites>
        </section>
        
        <section title="Two Sites">
             <script>
                let sites2 = {
                    'src': 'https://github.com/tmcmaster/tm-examples',
                    'pika': 'https://www.pika.dev/npm/@wonkytech/tm-examples'
                };
             </script>
             <tm-sites .sites="${sites2}"></tm-sites>
        </section>
        
        <section title="Four Sites">
             <script>
                let sites4 = {
                    'src': 'https://github.com/tmcmaster/tm-examples',
                    'pika': 'https://www.pika.dev/npm/@wonkytech/tm-examples',
                    'npm': 'https://www.npmjs.com/package/@wonkytech/tm-examples',
                    'docs': 'https://github.com/tmcmaster/tm-examples#readme'
                };
             </script>
             <tm-sites .sites="${sites4}"></tm-sites>
        </section>
        
        <section title="Left and Right Slots">
             <script>
                let sites4 = {
                    'src': 'https://github.com/tmcmaster/tm-examples',
                    'pika': 'https://www.pika.dev/npm/@wonkytech/tm-examples',
                    'npm': 'https://www.npmjs.com/package/@wonkytech/tm-examples',
                    'docs': 'https://github.com/tmcmaster/tm-examples#readme'
                };
             </script>
             <tm-sites .sites="${sites4}">
                <span slot="left">Tim McMaster</span>
                <span slot="right">tim@mcmaster.id.au</span>
             </tm-sites>
        </section>
        
        <section title="Left Slot Only">
             <script>
                let sites4 = {
                    'src': 'https://github.com/tmcmaster/tm-examples',
                    'pika': 'https://www.pika.dev/npm/@wonkytech/tm-examples',
                    'npm': 'https://www.npmjs.com/package/@wonkytech/tm-examples',
                    'docs': 'https://github.com/tmcmaster/tm-examples#readme'
                };
             </script>
             <tm-sites .sites="${sites4}">
                <span slot="left">Tim McMaster</span>
             </tm-sites>
        </section>
    </tm-examples>
   
`, document.querySelector('body'));