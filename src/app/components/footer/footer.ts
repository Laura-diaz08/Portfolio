import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true, 
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class FooterComponent {
  // Guardamos el año actual automáticamente
  anioActual = new Date().getFullYear();
}