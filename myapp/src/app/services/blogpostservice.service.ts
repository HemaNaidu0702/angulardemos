import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { PostData } from '../blogposts/postdata.model';

@Injectable({
  providedIn: 'root'
})
export class BlogpostService {
 

  constructor(private httpClient:HttpClient) { }
  
  private backendAppUrl: string ='https://myapphttpapiproject-a253c-default-rtdb.asia-southeast1.firebasedatabase.app/';
  private url: string = this.backendAppUrl + 'posts.json';
  private deleteUrl: string = this.backendAppUrl + 'posts/';

  createPost(title: string, content: string) {
    const mypostdata: PostData = { title: title, content: content};
    return this.httpClient.post(
      this.url,
      mypostdata
    );

  }


  fetchPosts() {
    return this.httpClient
  
    .get(this.url)
    .pipe(
         map((responseData) => {

          const postsArray = [];
          for(const key in responseData) {
            //... is an spread operator to flatten it
            postsArray.push({ ...responseData[key], id:key});
          }
          return postsArray;
         })
    );

  
}


deletePosts() {
 return this.httpClient
  .delete(this.url
    );

}

deletePost(postid:string) {
return this.httpClient
.delete(this.deleteUrl+
postid + 
'.json'
  )


}
}