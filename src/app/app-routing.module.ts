import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PainelComponent } from './painel/painel.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'painel', component: PainelComponent }
];

@NgModule({
  imports: [
    // CommonModule
    RouterModule.forRoot(routes)
  ],
  // declarations: []
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
