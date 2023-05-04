import { Component, OnInit } from '@angular/core';
import { PostData } from './postdata.model';
import { NgForm } from '@angular/forms';
import { FoodserviceService } from '../services/foodservice.service';

@Component({
  selector: 'app-foodblogcreate',
  templateUrl: './foodblogcreate.component.html',
  styleUrls: ['./foodblogcreate.component.css']
})
export class FoodblogcreateComponent implements OnInit {

  constructor(private foodService: FoodserviceService) { }

  ngOnInit(): void {
  }

  onCreatePost(postData: PostData, form:NgForm) {
  
    this.foodService
    .createPost(postData.title, postData.content)
    .subscribe((responseData) => {
       console.log(responseData);
       form.reset();
   });
   
   }
}
