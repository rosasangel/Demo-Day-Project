import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-contactme',
  templateUrl: './contactme.component.html',
  styleUrls: ['./contactme.component.css']
})





export class ContactmeComponent implements OnInit {
  public formData = new FormData();
  public contacts = [];
  public loading = false;
  public contact = {
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
  };
  public errors = {
    firstName: false,
    lastName: false,
    email: false,
    comments: false
  };
  constructor(public http: HttpClient) { }

  ngOnInit() {
  }

  onSelect(e) {

    console.log(e.srcElement.files[0]);
    let formData = new FormData();
    formData.append('file', e.srcElement.files[0]);
    // this.http.post ('/sendimage', formData)
    // .subscribe((res)=>{
    //   console.log(res);
    // }, (err) =>{
    //   console.log(err);

    // });
  }



  submit() {
    this.http.post('http://localhost:8080/uploadimage', this.formData)
      .subscribe((res) => {
        console.log(res);
      }, (err) => {
        console.log(err);

      });
  }
}
