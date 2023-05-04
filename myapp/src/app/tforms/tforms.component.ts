import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tforms',
  templateUrl: './tforms.component.html',
  styleUrls: ['./tforms.component.css']
})
export class TformsComponent implements OnInit {

  genders = ['male', 'female'];
  constructor() { }

  ngOnInit(): void {
  }

 submitted =false;

  user = {
    username: '',
    email: '',
    secret: '',
    gender: '',
  };

  onSubmit(form: NgForm) {
    this.user.username = form.value.username;
    this.user.email = form.value.email;
    this.user.secret = form.value.secret;
    this.user.gender = form.value.gender;
    console.log(form.value);
    this.submitted = true;
    form.reset();
  }
}
