import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToolbarService } from '../toolbar.service';
import * as $ from 'jquery';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  defaultImage: string = "https://picsum.photos/id/870/200/300?grayscale&blur=2";
  images: string[] = ["assets/education.jpg", "assets/datastruct.jpg", "assets/interview.jpg"]
  blurImages: string[] = ["assets/education-blur.jpg", "assets/datastruct-blur.jpg", "assets/interview-blur.jpg"]
  constructor(private route: ActivatedRoute, private router: Router, private toolbar: ToolbarService) { 
  	this.toolbar.changeTitle('Home Page');
  }

  colNums: number = 3;
  show: boolean = true;

  ngOnInit(): void {
		if (window.screen.width <= 768){
			//this.router.navigate(['/mobile']);
      this.colNums = 1;
      this.show = false;
    }

	}

}
