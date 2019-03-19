import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaCadernosComponent } from './lista-cadernos/lista-cadernos.component';
import { CadastrarCadernosComponent } from './cadastrar-cadernos/cadastrar-cadernos.component';

const routes: Routes = [
  {path: 'listaCadernos', component: ListaCadernosComponent},
  {path: 'cadastrarCadernos', component: CadastrarCadernosComponent},
  {path: '', pathMatch: 'full', redirectTo: 'listaCadernos'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
