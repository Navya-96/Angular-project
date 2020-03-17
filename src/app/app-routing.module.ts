import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FacultyDetailsComponent } from './faculty-details/faculty-details.component';


const routes: Routes = [
  {
    path: '',
    component: FacultyDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
