import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColaboradoresFormComponent } from './colaboradores/colaboradores-form.component';
import { HomeComponent } from './home/home.component'; 

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'novo', component: ColaboradoresFormComponent },
  { path: 'editar/:id', component: ColaboradoresFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
