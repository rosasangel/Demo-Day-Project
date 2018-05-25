import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AgentsComponent } from './agents/agents.component';
import { ContactComponent } from './contact/contact.component'; 
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SignuppageComponent } from './signuppage/signuppage.component';
import { EventDataService } from './event-data.service';
import { ContactmeComponent } from './contactme/contactme.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AgentsComponent,
    ContactComponent,
    SignuppageComponent,
    ContactmeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    FormsModule,
  ],
  providers: [EventDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
