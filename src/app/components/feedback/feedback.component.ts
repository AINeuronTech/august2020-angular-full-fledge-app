import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
})
export class FeedbackComponent implements OnInit {
  feedback: string;
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    const dialogRef = this.dialog.open(FeedbackDialog, {
      width: '400px',
      data: { feedback: this.feedback },
    });

    dialogRef.afterClosed().subscribe((data) => {
      console.log('The dialog was closed');
      this.feedback = data;
    });
  }
}

@Component({
  selector: 'feedback-dialog',
  templateUrl: 'feedback-dialog.html',
})
export class FeedbackDialog {
  constructor(
    public dialogRef: MatDialogRef<FeedbackDialog>,
    @Inject(MAT_DIALOG_DATA) public data: string
  ) {}

  onCancelClick(): void {
    this.dialogRef.close();
  }
}
