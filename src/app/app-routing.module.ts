import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './components/Cars/car/car.component';
import { IndexComponent } from './components/Cars/index/index.component';
import { SingleComponent } from './components/Cars/single/single.component';
import { MapApiComponent } from './components/map-api/map-api.component';
import { StoperComponent } from './components/stoper/stoper.component';

const routes: Routes = [
  {path:'cars',component:IndexComponent},
  {path:'cars/:mark',component:SingleComponent},
  {path:'cars/:mark/:model',component:CarComponent},
  {path:'stoper',component: StoperComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
