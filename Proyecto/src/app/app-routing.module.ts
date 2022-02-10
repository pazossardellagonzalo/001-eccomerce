import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './components/cliente/cliente.component'
import { FormClienteComponent } from './components/form-cliente/form-cliente.component'

const routes: Routes = [
  { path: "Clientes", component: ClienteComponent },
  { path: "Clientes/formCliente", component: FormClienteComponent },
  { path: "Clientes/formCliente/:dni", component: FormClienteComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
