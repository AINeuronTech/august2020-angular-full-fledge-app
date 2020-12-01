import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //window.location.href = 'https://support.google.com/googlenews/?p=web&hl=en&authuser=0&dark=0#topic=7688381';
  }

}
