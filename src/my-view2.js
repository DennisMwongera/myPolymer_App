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
import {LitElement, html, css} from 'lit-element';
import './shared-styles.js';

class MyView2 extends LitElement {
  // static get template() {
  //   return html`
  //     <style include="shared-styles">
  //       :host {
  //         display: block;

  //         padding: 10px;
  //       }
  //     </style>

  //     <div class="card">
  //       <div class="circle">2</div>
  //       <h1>View Two</h1>
  //       <p>Ea duis bonorum nec, falli paulo aliquid ei eum.</p>
  //       <p>Id nam odio natum malorum, tibique copiosae expetenda mel ea.Detracto suavitate repudiandae no eum. Id adhuc minim soluta nam.Id nam odio natum malorum, tibique copiosae expetenda mel ea.</p>
  //     </div>
  //   `;
  // }
  static get styles(){
    return css`
      .tuts{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
      }
      @media (max-width: 800px) {
      .tuts {
        display: flex;
         flex-direction: column;
         width: 100%;
       }
      }
        .card{
            box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
            transition: 0.3s;
            border-radius: 5px;
            width: 350px;
            margin: 10px;
            background-color: #fff;
        }
        .card:hover{
            box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
        }
        .container  {
            padding: 2px 16px;
            width: 350px;
        }
        .card_link{
          text-decoration: none;
          color: teal;
        }
    `;
}
  
static get properties(){
  return{
      name: { type: String },
      url: { type: String},
      img: { type: String}
  };
}

  constructor(){
    super();
    this.name = "Polymer Project";
    this.url = "";
    this.img = "https://images.app.goo.gl/WBupxgeJ5AbUa1Co8";
  }

  render() {
    return html`
  <div class="tuts">
      <div class="card">
        <iframe width="350" height="auto" src="https://www.youtube.com/embed/UcCsGZDCw-Q" frameborder="0" allow="accelerometer; autoplay; 
          clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

      <div class="container">
        <h3> <b>Polymer Project</b> </h3>
        <p> <a href="https://google.com" class="card_link">Open</a></p>
      </div>
    </div>

    <div class="card ">
    <iframe width="350" height="auto" src="https://www.youtube.com/embed/UcCsGZDCw-Q" frameborder="0" allow="accelerometer; autoplay; 
      clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

  <div class="container">
    <h3> <b>Polymer Project</b> </h3>
    <p> <a href="https://google.com" class="card_link">Open</a></p>
  </div>
</div>

<div class="card">
<iframe width="350" height="auto" src="https://www.youtube.com/embed/UcCsGZDCw-Q" frameborder="0" allow="accelerometer; autoplay; 
  clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<div class="container">
<h3> <b>Polymer Project</b> </h3>
<p> <a href="https://google.com" class="card_link">Open</a></p>
</div>
</div>
  </div>
    `;
  }
}

window.customElements.define('my-view2', MyView2);
