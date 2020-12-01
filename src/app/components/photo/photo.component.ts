import { Component, Input, OnInit } from '@angular/core';
import { IPhoto } from 'src/app/models/interfaces';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {

  @Input() photosInput: IPhoto[];
  constructor() { }

  ngOnInit(): void {
  }

}
