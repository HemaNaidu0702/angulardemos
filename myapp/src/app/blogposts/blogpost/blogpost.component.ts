import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PostData } from '../postdata.model';
import { BlogpostService } from 'src/app/services/blogpostservice.service';

@Component({
  selector: 'app-blogpost',
  templateUrl: './blogpost.component.html',
  styleUrls: ['./blogpost.component.css']
})
export class BlogpostComponent implements OnInit {
  
  @Input()
  post: PostData;
  
  @Output()
  postDeleted = new EventEmitter<PostData>();

  constructor(private blogPostService: BlogpostService) { }

  ngOnInit(): void {
  }

  onPostDelete() {
    // console.log('Deleting ' + this.post.id);
    this.blogPostService.deletePost(this.post.id).subscribe(() => {
    // console.log('post deleted' + this.post.id);
    this.postDeleted.emit(this.post);
  });

    
  }
}
