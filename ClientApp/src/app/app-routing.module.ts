import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddCardComponent} from './add-card/add-card.component'
import { DocardsComponent } from './docards/docards.component';

const routes: Routes = [{path: '', component: DocardsComponent},{ path: 'doCards', component: DocardsComponent }, {path: 'addCard', component: AddCardComponent} ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
