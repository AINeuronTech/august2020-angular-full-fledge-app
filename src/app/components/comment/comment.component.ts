import { Component, Input, OnInit } from '@angular/core';
import { IComment } from 'src/app/models/interfaces';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent implements OnInit {
  @Input() commentsInput: IComment[];
  panelOpenState = false;
  constructor() {}

  ngOnInit(): void {}
}
