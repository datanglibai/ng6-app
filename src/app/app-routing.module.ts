import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScienceFictionComponent } from '../lib/books/science-fiction/science-fiction.component';
import { FruitsComponent } from '../lib/fruits/fruits.component';



const routes: Routes = [
  { path: '', redirectTo: '/books', pathMatch: 'full' },
  { path: 'books', component: ScienceFictionComponent },
  { path: 'fruits', component: FruitsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}