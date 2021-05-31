import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,FormGroup,ReactiveFormsModule,Validators  } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NowyComponentComponent } from './nowy-component/nowy-component.component';
import { LoopsIfsComponent } from './components/loops-ifs/loops-ifs.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { KanbanComponent } from './components/kanban/kanban.component';
import { FormComponent } from './components/form/form.component';
import { MapApiComponent } from './components/map-api/map-api.component';
import { IndexComponent } from './components/Cars/index/index.component';
import { SingleComponent } from './components/Cars/single/single.component';
import { CarComponent } from './components/Cars/car/car.component';
import { StoperComponent } from './components/stoper/stoper.component';
import { PomocnikMatematycznyMainComponent } from './components/ee_09/2019_06_04/pomocnik-matematyczny-main/pomocnik-matematyczny-main.component';
import { ZgadnijLiczbeComponent } from './components/zgadnij-liczbe/zgadnij-liczbe.component';
import { HorneraComponent } from './components/hornera/hornera.component';
import { WisielecComponent } from './components/wisielec/wisielec.component';
import { ZawodyWedkarskieComponent } from './components/zawody-wedkarskie/zawody-wedkarskie.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListaZakupowComponent } from './components/lista-zakupow/lista-zakupow.component';
import { PrzychodyComponent } from './components/przychody/przychody.component';
import { KolkoKrzyzykComponent } from './components/kolko-krzyzyk/kolko-krzyzyk.component';
import { BlogComponent } from './components/blog/blog.component';
import { AnimalDetailsComponent } from './components/animal-details/animal-details.component';
import { SumaComponent } from './components/suma/suma.component';
import { NotatkiComponent } from './components/notatki/notatki.component';
import { ZwierzetaComponent } from './components/zwierzeta/zwierzeta.component';
import { UnitTestingComponent } from './components/unit-testing/unit-testing.component';
// import { PomocnikMatematycznyDzialaniaComponent } from './components/ee_09/2019_06_04/pomocnik-matematyczny-dzialania/pomocnik-matematyczny-dzialania.component';
// import { PomocnikMatematycznyTabliczkaComponent } from './components/ee_09/2019_06_04/pomocnik-matematyczny-tabliczka/pomocnik-matematyczny-tabliczka.component';

@NgModule({
  declarations: [
    AppComponent,
    NowyComponentComponent,
    LoopsIfsComponent,
    GalleryComponent,
    KanbanComponent,
    FormComponent,
    MapApiComponent,
    IndexComponent,
    SingleComponent,
    CarComponent,
    StoperComponent,
    PomocnikMatematycznyMainComponent,
    ZgadnijLiczbeComponent,
    HorneraComponent,
    WisielecComponent,
    ZawodyWedkarskieComponent,
    ListaZakupowComponent,
    PrzychodyComponent,
    KolkoKrzyzykComponent,
    BlogComponent,
    AnimalDetailsComponent,
    SumaComponent,
    NotatkiComponent,
    ZwierzetaComponent,
    UnitTestingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
