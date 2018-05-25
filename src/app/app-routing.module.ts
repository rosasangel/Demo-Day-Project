import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{HomeComponent} from './home/home.component';
import {ContactComponent} from './contact/contact.component';
import {AgentsComponent} from './agents/agents.component';
import { SignuppageComponent } from './signuppage/signuppage.component';
import { ContactmeComponent  } from './contactme/contactme.component';

const routes: Routes = [
  {path: 'home',component: HomeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'agents', component: AgentsComponent},
  {path: 'signuppage', component: SignuppageComponent},
  {path: 'contactme', component: ContactmeComponent},
  {path: '**', redirectTo: 'home'}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
