import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocardsComponent } from './docards/docards.component';

//default is set to DocardsComponent
const routes: Routes = [{path: '', component: DocardsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
