import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackOfficeRoutingModule } from './back-office-routing.module';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { QuinielasComponent } from './pages/quinielas/quinielas.component';
import { QuinielasConfigComponent } from './pages/quinielas-config/quinielas-config.component';


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    QuinielasComponent,
    QuinielasConfigComponent
  ],
  imports: [
    CommonModule,
    BackOfficeRoutingModule
  ]
})
export class BackOfficeModule { }
