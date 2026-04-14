import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Slide {
  image: string;
  title: string;
  subtitle: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent implements OnInit, OnDestroy {
  currentSlide = 0;
  intervalId: ReturnType<typeof setInterval> | null = null;

  slides: Slide[] = [
    {
      image: 'assets/home/Home.png',
      title: 'VOLVAMOS A SER NIÑOS',
      subtitle: 'Vive promociones, eventos y experiencias para toda la familia.'
    },
    {
      image: 'assets/img/home-slide-2.jpg',
      title: 'DISFRUTA CADA MOMENTO',
      subtitle: 'Descubre nuevas tiendas, sabores y promociones en Plaza Altabrisa.'
    },
    {
      image: 'assets/img/home-slide-3.jpg',
      title: 'EVENTOS PARA TODOS',
      subtitle: 'Encuentra actividades especiales durante toda la temporada.'
    }
  ];

  ngOnInit(): void {
    this.startCarousel();
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  startCarousel(): void {
    this.intervalId = setInterval(() => {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    }, 5000);
  }

  goToSlide(index: number): void {
    this.currentSlide = index;
  }
}