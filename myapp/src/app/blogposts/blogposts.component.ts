
import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

import { PostData } from './postdata.model';
import { BlogpostService } from '../services/blogpostservice.service';


@Component({
  selector: 'app-blogposts',
  templateUrl: './blogposts.component.html',
  styleUrls: ['./blogposts.component.css'],
})
export class BlogpostsComponent implements OnInit {
  dbPosts: PostData[] =[];
  isFetching = false;
  errorMessage = null;

  constructor(
    private blogPostService: BlogpostService) { }

  ngOnInit(): void {
    this.fetchPosts();
  }
 
  onCreatePost(postData: PostData, form:NgForm) {
  
   this.blogPostService
   .createPost(postData.title, postData.content)
   .subscribe((responseData) => {
      console.log(responseData);
    this.fetchPosts();
    form.reset();
  });
  
  }


   onFetchPosts() {

      this.fetchPosts();
   }

  fetchPosts() {
    this.isFetching = true;
    this.blogPostService.fetchPosts().subscribe(
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
   this.blogPostService.deletePosts().subscribe(() => {
    console.log('posts deleted');
    this.fetchPosts();
  });

  }


  onSinglePostDeleted(deletedPost: PostData) {
    console.log('From parent: single post deleted - ' + deletedPost);
    this.fetchPosts();
  }
}
