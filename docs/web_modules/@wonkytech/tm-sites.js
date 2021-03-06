import { L as LitElement, c as css, h as html } from '../common/lit-element-54503d46.js';

window.customElements.define('tm-sites', class extends LitElement {
  // noinspection JSUnusedGlobalSymbols
  static get properties() {
    return {
      sites: {
        type: Object
      }
    };
  }

  constructor() {
    super();
    this.sites = {};
  }

  static get styles() {
    // language=CSS
    return css`
            :host {
                display: flex;
                flex-direction: row;
                //justify-content: center;
                align-items: center;
                --tm-example-icon-size: 24px;
            }
            button.icon {
                width: var(--tm-example-icon-size);
                height: var(--tm-example-icon-size);
                box-sizing: border-box;
                border: none;
                background: white;
                padding: 0;
                background-size: var(--tm-example-icon-size);
                margin-left:10px;
            }
            button.pika {
                background-image: url(data:image/png;base64,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);
            }
            button.src {
                background-image: url(data:image/png;base64,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);            }
            button.site {
                margin-left: 0;
                background-image: url(data:image/png;base64,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);
            }
            button.npm {
                background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAAB3RJTUUH4wwEBgoRgkQNEAAAArpJREFUWMPtl0tPE1EYhp9zppUGikQhuvKy1XhZKEsuCVtNmvAjWJqICzZq2OkOEjYsWPIDiBBNILroAoMLxWiKXCNEY7gVWnqjc+ZzMcN0CkVJJO1C3mTS5szp9z3zve+kOWq2s6MBeAT0AC1UR5vAMDAY8po/BSJVag5w1euJ9p68ms0PFAF6NNUbeyW16Bo2B1wLzgDOAP5vgJD/TcS9KmJ6nI5T+b5S7vWnGpX2+wAinG9rI3rnLnLQRHlcts32+AROPkdzLIaOREBK95XS5BYXSE5O0tTeTsOt20dqHN6/93mWVDwOSpUm0HjvPs2xmA/pFArocBgRIT0zg9nZpaW7G6sh6oOJMei6OnbjcZKTkzS2tnLxwcOyGiocRmmNFIsggjp3DhUOuwAEMiCB8eYWF1h+0svWxLg7dgFBwDi+Fb9GRvj+/Bn27q4/9rIa899Y7n1M8s1rxLb5MTDA2ssXOIUCErCpYgidTJZcIkFxfcP3KigBCmtr5ObnkeJ+RZtNJkM2kaC4sQEi5FdWyC8tgTHl8To2JFqjtOJ4SdlHhSIorUF5LbQuhTmgECfRIQ6lFE0dndTfuIkVjQYo1JHfHHkEpcrWSgDGuB6KILbtPpwxbngOv35KcaGrCxFBKYUUD/bb4DgIEljzaoibJWd/HwnYEDoouDX+ivSHGZcllUZsm52378jOzZFfXiZ86TIELFkfHWXv00eUZVHc3gYRtsbGSE9PA2CnUogxJKemyHz9QmF1FTGG1f5+ilubfrbUbGdHBqjHcUrpVJ5/In6yI9euc6WvD6uxETGGn0NDpN9Pg2WhvMxUrOGtKc9/cZzSfsiWAP4WA8ty/fbITSbjjvbflD1ZCD0v7Z2dshychk4McJpNg6r5v+EZwBmAxj0o1kqbGveUmq9B8zwwHAIGvYWaHM9/A9BhUBQP38jdAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE5LTEyLTAzVDE5OjEwOjI1KzExOjAwotzGGwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOS0xMi0wM1QxOToxMDoxNysxMTowMMqRaG0AAAAASUVORK5CYII=);            }
            button.docs {
                background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAABcRAAAXEQHKJvM/AAAAB3RJTUUH4wwEBCMWW+LTNgAAA1pJREFUWMPF1++LVUUcx/HXzD37Qxc0cEnNrCcSRbahRoQQKUlEQVDQk4iisB9PJKj+jZDIRwVW9MR/IIzaUAqitqjMotrFkLS1bP3B4q7tuvdMD87Z3XPvnrvmqu0bhns4Z2Y+n5k7853vBDXc+9YX7a8CNmFHWQawHn3l9wmM4gccwmEcq3YwtGd7nZRwGfGArXgWj+AWdFmcSziOD/E+vl/MSIuBNvG12IPd5fNSOIV3sA9/15mYM9AmvhVvlNN9LRjE6zjSbiLUiN+Pt3H7NRKf5Se8iDmxoT3bxTbxbddJHO4s+767+jJUDKzDATxwHcSrDOIp5ZqIs0bwyv8gDrsUi1vVwD14vq52nlKHUq3TuV4HdmMLZKWJ53Bje62uGNx8wwrdjajaVcDkdNPo+JRcsnFVr76eRkvbgJk8OXH+H9PNvL3r9YrY8l2G2/Bw3cjXreq1a1O/kTMTQkvISFb3dtmSkmae9GTRuYszLe1TSjb1r3To2FkjYxNiWBDzHsW+DA9iY908ZTE4fu6iT4bPiLFFXwzBkwPrrOiNPvh2VDNPLWEtzxP6ZTHowK3YmWFn+VfUEgKNqHUEgWae/HZ2UncjauZJo10oFm0XoQs7Iu6yRFIiLbVxwUBULIilEZbccpabovkjdTnoi1ffx9URMbmM+pNRcWYvF6ciflxGA0ejIn9rdqoRQxEDit/5QrkNU5JY8D0KddGvygwOZ/gUJxWRqUJw8VJu4+oVHt+8dsGOm2rmumMUY/BYX7ferHU9p0R/X7eRsYlOBn7HoQw/42O80D7yvy5MOXDklCyGBQFnVU/DM9s26Mmi/V+fXHAWUITjC9PNTjNxEMMZcryLJ7CmfRTjUzN1jY1NTDv465ieRjQyNrkwFM/NYy2nFRlzmp23r/Bepw7qShaDI6Pjhk6cl8XQsV4H9uMb5hOSHHtVEsb/wkyezORXfBp8hjeVx0h15fyB17TdaK4xw6XGn7MvYttN5Uu8fJ1MDOMl5dRTpuWzDxUG8bQr/Dsuw+dln4er4ix+NduAVxW52xpLY0yxw/aqhPzaq1kHExH3KZLWh0pTDYvTVAS2j0rxIZW8ZdHLaQcTStE7FPnjTmxWXGRWlt8nFAvraDnNg/hFsbvmqLui/wsU1iWPw44Z8wAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOS0xMi0wM1QxODowMjowOSsxMTowMD+0fWoAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTktMTItMDNUMTc6MzU6MjIrMTE6MDBShT4cAAAAAElFTkSuQmCC);
            }
            button.demo {
                background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAAB3RJTUUH4wwEBC0XsmbOLgAAArlJREFUWMO9109oHFUcB/DPvN2ikHgIUkgqKc2hNIUqejAUsWCppb3lIkVQcVXEgyBq8eTJg4ci0VL00IO0Hjz1FAptQxsiNIikgmKEUnvoIWgKxXqwBbXNroc3u52d/NmZ3Wy/MDD7Zt7v+93f+817319iDTz9biM/FDCOA3gBezCCgfT5XSzjV8xhFtdQzwb5+atkFdeqkRx5ggm8gUMYRcXGWMESLuA0FtAKmhfR9itHPoIPUMNW3eEWTuF4mqFVIlp3OfIJTOH5LonzmMeHuJIXkaxBvh8nsXOTyJu4jnfEGmmJSHLkz+LbPpBnRbySzUTIPNyGz/tILo09JdZXm4AE79u8Nd8I+8TiTrICJsRq74hGI149opZyCulVU/BTGxtmaJB6vcjb62JryhkCduFwkVkrdQ4+w6c1dm+n3sjsMOVxGLuCuL2OFp1VCTy3m6m3mdzLlkoU0gVGcSCI332n7bWFJtcTj/Pxy3z0EsNDMTslUcH+gCfLzMru3Y9s4cg+PnuLveOpwHLZ2BMw3FUCM3hqjGNv8vqLDDxaaklGggdHak8YGuS9ST55LS5PwUwMhEKv9RFV0Uw81mugv+7wzSXOXObOP4Sk0LS7VdzsVcAvN/jyLFd+i6kvSA7LVSwqcQBll/bfe0z/wNczLN+Oe0RSnBwWq+L5PKngXtCM//ufnDzH+R/5734kL4kVfFcVDeQSdhSaVef7q5yY5upS/MclUp7FEmaronudEd3KhqgELv4UC+323+lJ0j0u4FoQrfMp0UB2xI2bseJ7JL8lOuZ6M8xCOtARSVK60NbC6ZSzZUgaonWe7zl0Z1zGFylnmyf8A0dF49gvXE85Wj1CyHUqC2Ix9kNE05a39QaheZPBHF61ucsxL9rxtp6AjVuzbaJTrnkYrdk6Ih5uc7qOCPrYnv8PeU7GhmqMOYIAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTktMTItMDNUMTg6MDI6MDkrMTE6MDA/tH1qAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE5LTEyLTAzVDE3OjQ1OjIzKzExOjAw3ckgKwAAAABJRU5ErkJggg==);
            }
            
            .center {
                display: flex;
                flex-direction: row;
                justify-content: center;
                flex: 2;
            }
            .left,.right {
                flex: 1;
            }
            
            .right ::slotted(*) {
                float: right;
            }
        `;
  } // noinspection JSUnusedGlobalSymbols


  render() {
    return html`
            <div class="left">
                <slot name="left"></slot>
            </div>
            <div class="center">
                ${Object.keys(this.sites).map(key => html`
                    <button @click="${() => this.openSite(key)}" class="icon ${key}"></button>
                `)}
            </div>
            <div class="right">
                <slot name="right"></slot>
            </div>
        `;
  }

  openSite(site) {
    const {
      sites
    } = this;
    console.log('Site: ' + site);
    window.open(sites[site], '_blank');
  }

});
