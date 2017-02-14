import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent implements OnInit {

  private jbtHeading: string;
  private jbtText: string;
  private jbtBtnText: string;
  private jbtBtnUrl: string;

  constructor() { 
    this.jbtHeading = 'Hello Vitor';
    this.jbtText = 'Curso Angular 2 Udemy';
    this.jbtBtnText = 'Read More';
    this.jbtBtnUrl = '/about';
  }

  ngOnInit() {
  }

}
