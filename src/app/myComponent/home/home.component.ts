import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  zip = new FormControl('')
  searchForm = new FormGroup({

  })
  // favoriteColorControl = new FormControl('');
  loginUser(){
    console.log("submited");

  }

}
