import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // atributos de la clase
  // esta clase debe estar incluida en el archivo HTML; en este caso [formGroup]="loginForm"
  loginForm: FormGroup = this.fb.group({
    // '' valor predeterminado del campo; por lo general se deja vacio 
    // [] corresponde a la validaciones => Validators
    email: [ '', [Validators.required, Validators.email] ], 
    password: ['', [Validators.required, Validators.minLength( 8 )]]
  });

  // inyección de dependencias utilizando constructor
  constructor ( private fb: FormBuilder ) {};
  
  // metodo para el login
  login() {
    console.group( 'loginForm' );
    console.info(this.loginForm.value);
    console.log(this.loginForm.valid);
    console.group();
  }
}
