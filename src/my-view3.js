/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

// import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import {LitElement, html, css, supportsAdoptingStyleSheets} from 'lit-element';
import './shared-styles.js';
//<script src="https://unpkg.com/axios/dist/axios.min.js"/>; //</script>
// import axios from 'axios';

class MyView3 extends LitElement {
  // static get template() {
  //   return html`
  //     <style include="shared-styles">
  //       :host {
  //         display: block;

  //         padding: 10px;
  //       }
  //     </style>

  //     <div class="card">
  //       <div class="circle">3</div>
  //       <h1>View Three</h1>
  //       <p>Modus commodo minimum eum te, vero utinam assueverit per eu.</p>
  //       <p>Ea duis bonorum nec, falli paulo aliquid ei eum.Has at minim mucius aliquam, est id tempor laoreet.Pro saepe pertinax ei, ad pri animal labores suscipiantur.</p>
  //     </div>
  //   `;
  // }
  static get styles(){
    return css`
        .card{
            box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
            transition: 0.3s;
            border-radius: 5px;
            margin: 10px;
            background-color: #d3d3d3;
            display: flex;
            justify-content: center;
        }
        .card:hover{
            box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
        }
        .container  {
            padding: 2px 16px;
            width: 350px;
        }
        .form {
          padding: 20px;
        }
        .toDoInput {
          padding: 10px;
          border-radius: 5%;
          border: 1px solid #212121;
        }
        .toDoBtn {
          padding: 8px;
          background-color: #4285f4;
          color: #fff;
          border-radius: 5%;
          border: 1px solid #4285f4;
        }
        .card_link{
          text-decoration: none;
          color: teal;
        }
        .taskGrid{
          display: flex;
          flex-direction: row;
          position: relative;
          margin-top: 20px;
          padding: 20px;
        }
        .task-card {
          background-color: #fff;
          border-radius: 5%;
          padding: 10px;

        }
        .task-title {
          color: #212121;
          font-weight: semibold;
        }
    `;
}
  
static get properties(){
  return{
      task: { type: String },
      item: { type: String},
      tstate: { type: String},
      todos : { type : Array},
      data: { type : Object},
      arr: { type: Array},
      dict:  {type : Array}
    
  };
}

firstUpdated(changedProperties) {
  if (super.firstUpdated) {
    super.firstUpdated(changedProperties);
    this.fetchData();
  } 
}

fetchData() {
  // fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
  //     .then(response => {
  //         if (!response.ok) {
  //             throw new Error('Network response was not ok');
  //         };
  //         response.json();
  //         console.log('heyy')
  //     })
  //     .then(data => {
  //         this.data = data;
  //         console.log('Success:', data);
  //     })
  //     .catch((error) => {
  //         console.error('Error:', error);
  //     });
  fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
  .then(response => response.json())
  .then(data => console.log(data));
    console.log(this.dict)
  
}


  // async  initiaty(){
//   let arr = []
//   fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
//   .then(response => { 
//     arr = response.json();
    
//     console.log('bna ',arr)
//   })
//   .then((result) => {
//     arr = result;
//   })
//   .then(steps => {
//     arr = steps;
//   });
    //.then(data => {
    //   arr = data;
    //  console.log('this is the final',arr);
   // });
  // console.log('this is the final',arr);
  //   return arr


constructor(props){
  super(props);
   this.todos = this.fetchData()
  this.item = '',
  this.tstate = '',
  this.task = ''
  this.dict = [{ '34': 'thirty-four', '90': 'ninety',
  '91': 'ninety-one','21': 'twenty-one',
  '61': 'sixty-one', '9': 'nine',
  '2': 'two', '6': 'six', '3': 'three',
  '8': 'eight', '80': 'eighty', '81': 'eighty-one',
  'Ninety-Nine': '99', 'nine-hundred': '900'} 
  ]
}

render() {
  return html`
  <div class="card">
  <div class="form">
  <div></div>
  <input label="Task" class="toDoInput" value="${this.item}" />
  <button class="toDoBtn"  @click="${this.clickHandler}">Add ToDo</button>
  </div>
  </div>
  <div class="card taskGrid">
  <div class="task-card">
  <div class="task-title">
    <h3>${this.todos}</h3>
  <div class="task-state">
      <p class="task-state_def">${this.tstate}</p>
  </div>
  </div>
  </div>
  <div class="">
  <ul>
      ${this.dict.sort(i => html`<li>${i}</li>`)}
  </ul>
  </div>
  </div>
  </div>
  `;
}     
  // if (!this.data) {
  //     return html`
  //         <h4>Loading...</h4>
  //     `;
  // }
  // return html`
  //     <h4>Done</h4>
  // `;}
  // ${this.todos.map(item => html`<li>${this.item}</li>`)}
 
}


window.customElements.define('my-view3', MyView3);



