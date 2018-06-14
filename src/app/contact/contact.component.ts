import { Component, OnInit } from '@angular/core';
import { EventDataService } from '../event-data.service';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public contact = {
    eventname: '',
    // firstname: '',
    // lastname: '',
    email: '',
    city: '',
    zipcode: '',
    state:'',
    eventType:'',
    time:'',
    imagesubmit:'',

    
  }


  constructor(private _data: EventDataService, private http:HttpClient) { }

  ngOnInit() {


    //listening for change
    this._data.event.subscribe((res) => {
      console.log(res);
    });

  }
  // send the change to data service
  newEvent(){
    this._data.addItem(this.contact);
  var url= 'https://localhost:8008/event/saveEvent';
  this.http.post(url,this.contact);
    
  }

}




