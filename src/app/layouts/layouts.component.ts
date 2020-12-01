import { Component, OnInit, ViewChild } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { MatSidenav } from '@angular/material/sidenav';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.css'],
})
export class LayoutsComponent implements OnInit {
  title = 'AngularNews';
  @ViewChild(MatSidenav)
  sidenav: MatSidenav;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public media: MediaObserver
  ) {}

  ngOnInit() {}

  toggle() {
    this.sidenav.toggle();
  }

  goToDashboard() {
    this.router.navigate([''], { relativeTo: this.route });
  }
}
