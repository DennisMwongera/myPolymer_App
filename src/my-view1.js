import { LitElement, html } from 'lit-element'

class MyView1 extends LitElement {
  static get properties () {
    return {
      shownValue: {
        type: String,
        attribute: false
      }
    }
  }

  constructor () {
    super()
    this.shownValue = '';
  }

  render () {
    return html`
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma-rtl.min.css">
         <div class="is-half mt-5 is-justify-content-center box">
          <h1 class="has-text-centered is-size-4">FORM</h1>
            <div class="field m-5">
              <label class="label has-text-dark  is-6">Name</label>
                <div class="control">
                 <input id="name" class="input" placeholder="Name" value="${this.shownValue}" @change=${this.updateShownValue} type="text" id="native">
                </div>
            </div>

            <div class="field m-5">
                  <label class="label has-text-dark is-size-6">Email</label>
                <div class="control">
                  <input id="email" class="input" placeholder="Email" value="${this.shownValue}" @change=${this.updateShownValue} type="text" id="native">
              </div>
            </div>
            
              <div class="field m-5">
              <label class="label has-text-dark is-size-6">Phone Number</label>
              <div class="control">
                <input id="number" class="input" placeholder="Number" value="${this.shownValue}" @change=${this.updateShownValue} type="number" id="native">
              </div>
            </div>

      <div class="field is-grouped m-5">
      <div class="control">
       <button class="button is-link" @click="${this.updateShownValue}">Submit</button>
     </div>
    </div>
  </div>
              `
  }

  updateShownValue (e) {
    // this.shownValue = e.srcElement.value
    console.log(e.srcElement.value)
     alert(e.srcElement.value)
  }

}
window.customElements.define('my-view1', MyView1);
// import {LitElement, html} from 'lit-element';

// class MyView1 extends LitElement {

//   static get properties() {
//     return {
//         username: {type: String},
//         email: {type: String},
//         number: {type: Number},
//         message: { type: String}
//     };
//   }
//   set onInput(e){
//     let  text = e.target.value
//     console.log(text)
//   }

//   constructor() {
//     super();
//     this.username = '';
//     this.email= 'gdfgrgrtrrtrtrt';
//     this.number = '';
//     this.message = '';
//   }
//   handleKeyUp(value) {
//     this.message = value;
//   }
//   //@input=${this.onInput}s

//   render() {
//     return html`
//      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma-rtl.min.css">
//      <div class="is-half mt-5 is-justify-content-center box">
//      <h1 class="has-text-centered is-size-4">FORM</h1>
//      <div class="field m-5">
//      <label class="label has-text-dark  is-6">Name</label>
//      <div class="control">
//        <input id="name" class="input" type="name" placeholder="Name" value="${this.username}" @input="${this.email}">
//      </div>
//    </div>
    
//    <div class="field m-5">
//      <label class="label has-text-dark is-size-6">Email</label>
//      <div class="control">
//        <input id="email" class="input" type="email" placeholder="Email" value="${this.email}" @input="${this.email}">
//    </div>
//  </div>

//    <div class="field m-5">
//    <label class="label has-text-dark is-size-6">Phone Number</label>
//    <div class="control">
//      <input id="number" class="input" type="number" placeholder="Phone Number" value="${this.number}" @input="${this.email}">
//    </div>
//  </div>
    
//    <div class="field is-grouped m-5">
//      <div class="control">
//        <button class="button is-link" @click="${this.clickHandler}">Submit</button>
//      </div>
//    </div>
//    </div>
//     `;
//   } 
// }
// window.customElements.define('my-view1', MyView1);

// let text = '';
// const onInput = (e) => {
//   text = e.target.value;
//   go();
// };

// const go = () => {
//   render(html`<input .value=${text} @input=${onInput}>`, document.body);
// }
//go();


// class MyView1 extends LitElement {
//   static get template() {
//     return html`
//       <style include="shared-styles">
//         :host {
//           display: block;

//           padding: 10px;
//         }
//       </style>

//       <div class="card">
//         <div class="circle">1</div>
//         <h1>View One</h1>
//         <p>Ut labores minimum atomorum pro. Laudem tibique ut has.</p>
//         <p>Lorem ipsum dolor sit amet, per in nusquam nominavi periculis, sit elit oportere ea.Lorem ipsum dolor sit amet, per in nusquam nominavi periculis, sit elit oportere ea.Cu mei vide viris gloriatur, at populo eripuit sit.</p>
//       </div>
//     `;
//   }
// }
/**
 * 
 * 
 *   
 */


