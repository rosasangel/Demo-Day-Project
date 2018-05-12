import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
public contact = {
  firstname: '',
  lastname: '',
  email:'',
  adress:'',
  city:'',
  zipcode:''
}
public contacts=[];
  constructor() { }

  ngOnInit() {
  }

}
