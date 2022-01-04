import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  @Input()
  images: string[];

  active = 0;
  loading = true;

  constructor() { }

  ngOnInit(): void {
  }

  previous() {
    this.active -= 1;
    this.loading = false;
  }

  next() {
    this.active += 1;
    this.loading = false;
  }

}
