import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

// http://localhost:4200
const routes: Routes = [                                 // -> path   page
  {path: '', component: HomeComponent},                  // -> /           home page       http://localhost:4200/
  {path: 'login', component: LoginComponent},            // -> /login      login page      http://localhost:4200/login
  {path: 'register', component: RegisterComponent},      // -> /register   register page   http://localhost:4200/register
  {path: '**', redirectTo: ''}                           // -> /hola       home page       http://localhost:4200/   esta ruta redirige a home en caso que la ruta especificada no existe
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
