import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JustificacionComponent } from './justificacion/justificacion.component';
import { InstalacionComponent } from './instalacion/instalacion.component';
import { PrimerosPasosComponent } from './primeros-pasos/primeros-pasos.component';
import { UtilizacionComponent } from './utilizacion/utilizacion.component';
import { ExplicacionComponent } from './explicacion/explicacion.component';
import { ConclusionesComponent } from './conclusiones/conclusiones.component';

@NgModule({
  declarations: [
    AppComponent,
    JustificacionComponent,
    InstalacionComponent,
    PrimerosPasosComponent,
    UtilizacionComponent,
    ExplicacionComponent,
    ConclusionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
