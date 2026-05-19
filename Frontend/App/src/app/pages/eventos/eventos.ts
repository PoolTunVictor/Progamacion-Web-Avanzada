import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

declare var FB: any;

@Component({
  selector: 'app-eventos',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './eventos.html',
  styleUrls: ['./eventos.css']
})
export class Eventos implements AfterViewInit {

  ngAfterViewInit(): void {
    this.renderFacebook();
  }

  renderFacebook() {
    setTimeout(() => {
      if (typeof FB !== 'undefined') {
        FB.XFBML.parse();
      } else {
        console.warn('Facebook SDK no cargado aún');
      }
    }, 500);
  }

}