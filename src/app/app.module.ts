import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NowyComponentComponent } from './nowy-component/nowy-component.component';
import { LoopsIfsComponent } from './components/loops-ifs/loops-ifs.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { KanbanComponent } from './components/kanban/kanban.component';
import { FormComponent } from './components/form/form.component';
import { FormsModule } from '@angular/forms';
import { MapApiComponent } from './components/map-api/map-api.component';

@NgModule({
  declarations: [
    AppComponent,
    NowyComponentComponent,
    LoopsIfsComponent,
    GalleryComponent,
    KanbanComponent,
    FormComponent,
    MapApiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
