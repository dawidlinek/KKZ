import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalDetailsComponent } from './components/animal-details/animal-details.component';
import { BlogComponent } from './components/blog/blog.component';
import { CarComponent } from './components/Cars/car/car.component';
import { IndexComponent } from './components/Cars/index/index.component';
import { SingleComponent } from './components/Cars/single/single.component';
import { PomocnikMatematycznyMainComponent } from './components/ee_09/2019_06_04/pomocnik-matematyczny-main/pomocnik-matematyczny-main.component';
import { HorneraComponent } from './components/hornera/hornera.component';
import { KolkoKrzyzykComponent } from './components/kolko-krzyzyk/kolko-krzyzyk.component';
import { ListaZakupowComponent } from './components/lista-zakupow/lista-zakupow.component';
import { MapApiComponent } from './components/map-api/map-api.component';
import { NotatkiComponent } from './components/notatki/notatki.component';
import { PrzychodyComponent } from './components/przychody/przychody.component';
import { StoperComponent } from './components/stoper/stoper.component';
import { WisielecComponent } from './components/wisielec/wisielec.component';
import { ZawodyWedkarskieComponent } from './components/zawody-wedkarskie/zawody-wedkarskie.component';
import { ZgadnijLiczbeComponent } from './components/zgadnij-liczbe/zgadnij-liczbe.component';
import { ZwierzetaComponent } from './components/zwierzeta/zwierzeta.component';

const routes: Routes = [
  {path:'cars',component:IndexComponent},
  {path:'cars/:mark',component:SingleComponent},
  {path:'cars/:mark/:model',component:CarComponent},
  {path:'stoper',component: StoperComponent},
  {path:'ee_09_2019_06_04',component:PomocnikMatematycznyMainComponent},
  {path:'zgadnij',component:ZgadnijLiczbeComponent},
  {path:'horner',component:HorneraComponent},
  {path:'wisielec',component:WisielecComponent},
  {path:'wedkarz',component:ZawodyWedkarskieComponent},
  {path:'lista',component:ListaZakupowComponent},
  {path:'przychody',component:PrzychodyComponent},
  {path:'kolko',component:KolkoKrzyzykComponent},
  {path:'blog',component:BlogComponent},
  {path:'zwierzeta2',component:AnimalDetailsComponent},
  {path:'notatki',component:NotatkiComponent},
  {path:'zwierzeta',component:ZwierzetaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
