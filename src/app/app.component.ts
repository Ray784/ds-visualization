import { Component, OnInit } from '@angular/core';
import { ToolbarService } from './toolbar.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title: string;
  show: boolean = true;
  constructor(private toolbar: ToolbarService){
  	toolbar.toolbarTitle.subscribe(title=>this.title = title);
  }
  ngOnInit(){
  	if (window.screen.width <= 768) // 768px portrait
		this.show = false;
  }
}
