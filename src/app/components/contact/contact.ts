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
      nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      mensaje: new FormControl('', [Validators.required, Validators.minLength(10)])
    });
  }

  onEnviar() {
    if (this.contactForm.valid) {

      console.log('Datos del formulario:', this.contactForm.value);
      
      this.enviado = true;
      this.error = false;
      this.contactForm.reset(); 
      
      setTimeout(() => this.enviado = false, 5000);

    } else {
      this.error = true;
      setTimeout(() => this.error = false, 4000);
    }
  }
}