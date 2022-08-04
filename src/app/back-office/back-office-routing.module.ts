import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuinielasConfigComponent } from './pages/quinielas-config/quinielas-config.component';
import { QuinielasComponent } from './pages/quinielas/quinielas.component';

const routes: Routes = [
  {
    path:'',
    children: [
      { path: 'quinielas', component: QuinielasComponent },
      { path: 'quinielas-config/:id', component: QuinielasConfigComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackOfficeRoutingModule { }
