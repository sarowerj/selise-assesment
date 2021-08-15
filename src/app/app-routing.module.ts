import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SearchFlightComponent } from './pages/search-flight/search-flight.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'search-flight', component:SearchFlightComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
