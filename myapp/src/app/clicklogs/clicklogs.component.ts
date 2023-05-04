import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clicklogs',
  templateUrl: './clicklogs.component.html',
  styleUrls: ['./clicklogs.component.css']
})
export class ClicklogsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
logs=[];
showSecret:boolean;

toggleShowSecret(){
  this.showSecret = !this.showSecret;
  let dateTime = new Date();
  this.logs.push('Button pushed at' + dateTime.toLocaleDateString());
}
 onResetLogs() {
  this.logs = [];
 }
}
