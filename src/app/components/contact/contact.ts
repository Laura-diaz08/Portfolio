import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], 
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class ContactComponent {

  contactForm: FormGroup;

  enviado = false;
  error = false;

  constructor() {
    this.contactForm = new FormGroup({
      // Validaciones del formulario
      nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      mensaje: new FormControl('', [Validators.required, Validators.minLength(10)])
    });
  }

  onEnviar() {
    if (this.contactForm.valid) {

      // Ver si el formulario está bien
      console.log('Datos del formulario:', this.contactForm.value);
      
      this.enviado = true;
      this.error = false;
      this.contactForm.reset(); 
      
      // Quitar el mensaje tras 5 segundos
      setTimeout(() => this.enviado = false, 5000);

    } else {
      this.error = true;
      // Quitar el mensaje tras 5 segundos
      setTimeout(() => this.error = false, 4000);
    }
  }
}