import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { HeaderComponent } from './componentes/header/header.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { AppRoutingModule } from './app-routing.module.ts/app-routing.module.ts.module';
import {HttpClientModule} from '@angular/common/http';
import { HeaderEditComponent } from './componentes/header-edit/header-edit.component';
import { ExperienciaEditComponent } from './componentes/experiencia-edit/experiencia-edit.component';
import { ButtomAddComponent } from './componentes/buttom-add/buttom-add.component';
import { ButtomEditComponent } from './componentes/buttom-edit/buttom-edit.component';
import { ButtomDelComponent } from './componentes/buttom-del/buttom-del.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillsComponent,
    ProyectosComponent,
    HeaderEditComponent,
    ExperienciaEditComponent,
    ButtomAddComponent,
    ButtomEditComponent,
    ButtomDelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
