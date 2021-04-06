import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }
  random: number = 1;
  images: string[] = ['assets/unavailable-1.jpg','assets/unavailable-2.jpg','assets/unavailable-3.jpg','assets/unavailable-4.jpg','assets/unavailable-5.jpg'];
  blurImages: string[] = ['assets/unavailable-1-blur.jpg','assets/unavailable-2-blur.jpg','assets/unavailable-3-blur.jpg','assets/unavailable-4-blur.jpg','assets/unavailable-5-blur.jpg'];
  ngOnInit(): void {
  	if (window.screen.width > 720)
      this.router.navigate(['/home']);
    else
  		this.random = Math.round(Math.random() * 4);
  }
}