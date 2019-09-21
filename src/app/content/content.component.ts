import { Component, OnInit } from '@angular/core';

import Typed from 'typed.js';

@Component({
  selector: 'has-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const options = {
      stringsElement: '#typed-strings',
      strings: ['ETEC - Banco Digital', 'Peça a portabilidade e venha ser ETEC hoje mesmo', 'Inovavor, digital e seguro'],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 200,
      smartBackspace: true,
      fadeOut: true,
      showCursor: false,
      startDelay: 1000,
      loop: true
    };
	
	const typed = new Typed('.typing-element', options);
  }

}
