import { Component, OnInit } from '@angular/core';
import {Blog} from '../blog';
import {BlogService} from '../blog.service';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';
import {ToolbarService} from '../toolbar.service';



@Component({
  selector: 'app-new-blog',
  templateUrl: './new-blog.component.html',
  styleUrls: ['./new-blog.component.css']
})
export class NewBlogComponent implements OnInit {

  constructor(private blogService : BlogService, private http: HttpClient, private toolbar: ToolbarService) {
    this.toolbar.changeTitle('Create and edit blogs');
   }
  blogs: Blog[];
  isLoading: boolean = true;
  edit_type: string = "Edit";
  editing: boolean = false;
  blogEditForm;
  private editUrl:string = "https://major-app.herokuapp.com/setBlog";

  ngOnInit(): void {
  	this.blogService.getBlog().subscribe(blogs=>{
  		this.blogs = blogs['blogs'].slice().reverse();
  		this.isLoading = false;
  	});
  	this.blogEditForm = new FormGroup({
      title: new FormControl(''),
      author: new FormControl(''),
      footer: new FormControl(''),
      body: new FormControl(''),
      time_stamp: new FormControl('')
    });
  }

  edit(blog):void {
  		this.editing = true;
  		this.edit_type = "Edit";
  		this.blogEditForm.get('title').setValue(blog.title);
  		this.blogEditForm.get('author').setValue(blog.author);
  		this.blogEditForm.get('footer').setValue(blog.footer);
  		this.blogEditForm.get('body').setValue(blog.body);
  		this.blogEditForm.get('time_stamp').setValue(blog.time_stamp);
  }

  delete(blog):void {
  	let confirmed = confirm('Are you sure you want to delete the selected blog?');
  	if(confirmed == true){
  		this.http.post(this.editUrl, {time_stamp: blog.time_stamp, blog: "-1"}).subscribe((responseData)=>{
	  		this.resetForm();
		  	this.blogService.getBlog().subscribe(blogs=>{
		  		this.blogs = blogs['blogs'];
		  		this.isLoading = false;
		  	});
	  	});
	  	this.isLoading = true;
  		this.editing = false;
  	}
  	else
  		console.log("not deleted");
  }

  time(time_stamp){
    let dateObj = new Date(parseInt(time_stamp) + 330 * 60000); 
    let utcString = dateObj.toUTCString();
    return utcString.slice(0, -4)+" IST";
  }

  resetForm(){
  		this.blogEditForm.get('title').setValue('');
  		this.blogEditForm.get('author').setValue('');
  		this.blogEditForm.get('footer').setValue('');
  		this.blogEditForm.get('body').setValue('');
  		this.blogEditForm.get('time_stamp').setValue('-1');
  }

  newBlog(){
  	this.resetForm();
  	this.editing = true;
  }

  saveChanges(){
  	let blog = this.blogEditForm.value;
  	let time_stamp = blog.time_stamp;
  	let now = new Date();
  	blog['time_stamp'] = ''+now.getTime();
  	this.http.post(this.editUrl, {time_stamp: time_stamp, blog: JSON.stringify(blog)}).subscribe((responseData)=>{
  		this.resetForm();
	  	this.blogService.getBlog().subscribe(blogs=>{
	  		this.blogs = blogs['blogs'];
	  		this.isLoading = false;
	  	});
  	});
	this.isLoading = true;
  	this.editing = false;
  }

}
