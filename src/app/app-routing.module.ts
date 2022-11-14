import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AddNewCarComponent} from "./components/add-new-car/add-new-car.component";
import {GetCarComponent} from "./components/get-car/get-car/get-car.component";

const routes: Routes = [
  { path: '', component: AddNewCarComponent },
  { path: 'add', component: AddNewCarComponent },
  { path: 'get', component: GetCarComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
