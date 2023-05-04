import { Injectable } from '@angular/core';
import { PostData } from '../foodblogcreate/postdata.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class FoodserviceService {

  constructor(private httpClient:HttpClient) { }

  private backendAppUrl: string ='https://foodblog-d626e-default-rtdb.asia-southeast1.firebasedatabase.app/';
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

// updatePost(title: string, content: string, postid: string) {
//   const mypostdata: PostData = { title: title, content: content};
//   return this.httpClient.post(
//     this.deleteUrl+
//     postid + 
//     '.json',
//     mypostdata
//   );
// }

updatePost(title: string, content: string, postid: string): Observable<any> {
  const data: PostData = { title: title, content: content};
  return this.httpClient.patch(this.deleteUrl+postid+'.json', data)
}

}
