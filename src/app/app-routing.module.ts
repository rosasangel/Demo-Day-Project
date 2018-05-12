import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{HomeComponent} from './home/home.component';
import {ContactComponent} from './contact/contact.component';
import {AgentsComponent} from './agents/agents.component';
const routes: Routes = [
  {path: 'home',component: HomeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'agents', component: AgentsComponent},
  {path: '**', redirectTo: 'home'}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
