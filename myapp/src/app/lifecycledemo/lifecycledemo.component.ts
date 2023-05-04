import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycledemo',
  templateUrl: './lifecycledemo.component.html',
  styleUrls: ['./lifecycledemo.component.css']
})
export class LifecycledemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
