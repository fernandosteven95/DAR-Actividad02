import { Component } from '@angular/core';

@Component({
  selector: 'app-explicacion',
  standalone: false,
  templateUrl: './explicacion.component.html',
  styleUrl: './explicacion.component.css'
})
export class ExplicacionComponent {
  scrollTo(fragment: string): void {
    const element = document.getElementById(fragment);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
