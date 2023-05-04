import { Component, OnInit } from '@angular/core';
import { PostData } from '../foodblogcreate/postdata.model';

import { FoodserviceService } from '../services/foodservice.service';

@Component({
  selector: 'app-foodbloghome',
  templateUrl: './foodbloghome.component.html',
  styleUrls: ['./foodbloghome.component.css']
})
export class FoodbloghomeComponent implements OnInit {
  dbPosts: PostData[] =[];
  isFetching = false;
  errorMessage = null;
  
  constructor(private foodService: FoodserviceService) { }




ngOnInit(): void {
  this.fetchPosts();
}




 onFetchPosts() {

    this.fetchPosts();
 }

fetchPosts() {
  this.isFetching = true;
  this.foodService.fetchPosts().subscribe(
    (posts) => {
    this.dbPosts = posts;
    this.isFetching = false;
  },
  (error) => {
    this.errorMessage = error.error.error;
    console.log(error);
    console.log(error.error.error);
  }
  );
}



onDeletePosts() {
 this.foodService.deletePosts().subscribe(() => {
  console.log('posts deleted');
  this.fetchPosts();
});

}


onSinglePostDeleted(deletedPost: PostData) {
  console.log('From parent: single post deleted - ' + deletedPost);
  this.fetchPosts();
}
}