import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  public userForm: FormGroup;

  constructor(
    private userServices: UserService,
    private snack: MatSnackBar,
    private fb: FormBuilder
  ) {
    this.userForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      direccion: ['', Validators.required],
      celular: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      sexo: ['', Validators.required],
      state: ['INACTIVE'],
    });
  }

  formSubmit() {
    if (this.userForm.invalid) {
      return;
    }

    this.userServices.añadirUsuario(this.userForm.value).subscribe(
      (data) => {
        console.log(data);
        Swal.fire({
          title: 'Usuario guardado',
          text: 'Usuario registrado con éxito en el sistema',
          icon: 'success',
          confirmButtonText: 'Aceptar'
        }).then((result) => {
          if (result.isConfirmed) {
            // Reset the form
            this.userForm.reset();
          }
        });
      },
      (error) => {
        console.error('Error al registrar usuario:', error);
        try {
          const errorObj = JSON.parse(error.error);
          if (errorObj && errorObj.message) {
            // Si hay un objeto de error con un mensaje, lo utilizamos
            Swal.fire({
              title: 'Error',
              text: errorObj.message,
              icon: 'error',
              confirmButtonText: 'Aceptar'
            });
          } else {
            console.error('Error al analizar la respuesta del servidor:', error);
          }
        } catch (parseError) {
          // Si el análisis falla, asumimos que es una cadena de éxito y la imprimimos en la consola
          console.log('Respuesta del servidor:', error.error);
      
          // Aquí podrías también mostrar algún mensaje de éxito si lo deseas
           Swal.fire({
             title: 'Éxito',
             text: 'Usuario registrado correctamente',
             icon: 'success',
             confirmButtonText: 'Aceptar'
          });
        }
      }
    );
  }
}
