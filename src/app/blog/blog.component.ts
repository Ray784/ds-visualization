import { Component, OnInit } from '@angular/core';
import {Blog} from '../blog';
import {BlogService} from '../blog.service';
import { HttpEvent, HttpResponse} from '@angular/common/http';
import {ToolbarService} from '../toolbar.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor(private blogService : BlogService, private toolbar: ToolbarService) { 
    this.toolbar.changeTitle('What you need to Know?');

  }
  blogs: Blog[];
  isLoading: boolean = true;

  ngOnInit(): void {
  	this.blogService.getBlog().subscribe(blogs=>{
  		this.blogs = blogs['blogs'].slice().reverse();
  		this.isLoading = false;
  	});
  }
  time(time_stamp){
    let dateObj = new Date(parseInt(time_stamp) + 330 * 60000); 
    let utcString = dateObj.toUTCString();
    return utcString.slice(0, -4)+" IST";
  }

}