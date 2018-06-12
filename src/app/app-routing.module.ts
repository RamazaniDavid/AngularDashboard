import { NgModule } from "@angular/core";

const routes: Routes = [
  { 
    path: 'samplePages',
    loadChildren: './sample/sample.module#SampleModule' 
  }] 

import { Routes, RouterModule } from '@angular/router';

  @NgModule({
      imports : [RouterModule.forRoot(routes)],
      exports : [RouterModule]
  })
  export class AppRoutingModule { }
  


  