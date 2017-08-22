import './polyfills';

import './styles/main.scss';
import './public/font-awesome/scss/font-awesome.scss';


import * as hyperHTML from 'hyperhtml';
// import render from './template.js.html'


const { h } = require('dom-chef');


export class AppComponent extends HTMLElement {
  html: any;
  private _template: any;


  constructor() {
    super();
    this.html = hyperHTML.bind(this);
    this._template = require('./template.js.html');
  }

  render() {
    console.log(this._template(this))
    return this._template(this, this.html);
  }

  connectedCallback() {

    this.render();

    //   const el = (
    //     <div class="header">
    //       <a href="#" class="link">Download</a>
    //     </div>
    //   );

    //   // const $template =
    //   //   <template id="task">
    //   //     <li>
    //   //       <h1>Task name</h1>
    //   //       <p>Task body</p>
    //   //     </li>
    //   //   </template>;

    //   const tasks = [
    //     {
    //       name: "Сделать зарядку",
    //       body: "Разминка, пробежка, подтягивание на перекладине"
    //     },
    //     {
    //       name: "Купить продукты",
    //       body: "Хлеб, овощи, чай"
    //     },
    //     {
    //       name: "Подготовить доклад",
    //       body: "Найти проблему, описать суть, найти решение"
    //     }
    //   ];

    //   let $todoList = <ui id="todo-list"></ui>

    //   // const $content = document.importNode($template, true);

    //   // $content.querySelector('h1').innerText = '1111111111111111';

    //   const $template: any = document.getElementById('task');

    //   tasks.forEach(task => {
    //     const $clone = document.importNode($template.content, true);

    //     $clone.querySelector('h1').innerText = task.name;
    //     $clone.querySelector('p').innerText = task.body;
    //     $todoList.appendChild($clone);
    //   });

    //   // let el1 = (

    //   // );

    //   // this.innerHTML = el1;
    //   this.appendChild($todoList);

    //   // this.appendChild(el);
  }
}

window.customElements.define("app-component", AppComponent);