import { Component, OnInit } from '@angular/core';
import { EventDataService } from '../event-data.service';

@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.css']
})
export class AgentsComponent implements OnInit {

  public events = [
    {
      eventname:'',
      firstname: '',
      lastname: '',
      email: '',
      city: '',
      zipcode: '',
      state:'',
      eventType:'',
      
    }
  ];

  constructor(private _data: EventDataService) { }



  ngOnInit() {
    //listening for a change
    this._data.event.subscribe((res) => {
      this.events = res;
      console.log(res);
    });

  }

}