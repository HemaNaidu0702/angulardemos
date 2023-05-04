import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PostData } from 'src/app/foodblogcreate/postdata.model';
import { FoodserviceService } from 'src/app/services/foodservice.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {


  @Input()
  post: PostData;
  
  @Output()
  postDeleted = new EventEmitter<PostData>();

  constructor(private foodService: FoodserviceService) { }

  ngOnInit(): void {
  }

  onPostDelete() {
    // console.log('Deleting ' + this.post.id);
    this.foodService.deletePost(this.post.id).subscribe(() => {
    // console.log('post deleted' + this.post.id);
    this.postDeleted.emit(this.post);
  });

    
  }

  onPostUpdate(value: any) {


    this.foodService.updatePost(value.title, value.content, this.post.id)
      .subscribe(response => {
        console.log(response)
      })
  }
}
