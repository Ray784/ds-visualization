import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unavailable',
  templateUrl: './unavailable.component.html',
  styleUrls: ['./unavailable.component.css']
})
export class UnavailableComponent implements OnInit {

  constructor() { }
  random: number = 1;
  color: string;
  images: string[] = ['assets/unavailable-1.jpg','assets/unavailable-2.jpg','assets/unavailable-3.jpg','assets/unavailable-4.jpg','assets/unavailable-5.jpg'];
  blurImages: string[] = ['assets/unavailable-1-blur.jpg','assets/unavailable-2-blur.jpg','assets/unavailable-3-blur.jpg','assets/unavailable-4-blur.jpg','assets/unavailable-5-blur.jpg'];
  ngOnInit(): void {
  	this.random = Math.round(Math.random() * 4);
  }
}
