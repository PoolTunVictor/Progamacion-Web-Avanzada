import { Component, OnDestroy, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Slide {
  image: string;
  title: string;
  subtitle: string;
}

interface Promotion {
  image: string;
  title: string;
  description: string;
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

  currentPromoGroup = 0;
  promoIntervalId: ReturnType<typeof setInterval> | null = null;

  constructor(private cdr: ChangeDetectorRef) {}

  slides: Slide[] = [
    {
      image: 'assets/home/Plaza1.png',
      title: 'VOLVAMOS A SER NIÑOS',
      subtitle: 'Vive promociones, eventos y experiencias para toda la familia.'
    },
    {
      image: 'assets/home/Plaza2.png',
      title: 'DISFRUTA CADA MOMENTO',
      subtitle: 'Descubre nuevas tiendas, sabores y promociones en Plaza Altabrisa.'
    },
    {
      image: 'assets/home/Plaza3.png',
      title: 'EVENTOS PARA TODOS',
      subtitle: 'Encuentra actividades especiales durante toda la temporada.'
    }
  ];

  promotions: Promotion[] = [
    {
      image: 'assets/home/promocion1.png',
      title: 'Promociones en restaurantes',
      description: 'Descuentos especiales y experiencias para compartir.'
    },
    {
      image: 'assets/home/hym.jpg',
      title: 'Ofertas en tiendas',
      description: 'Las mejores marcas con beneficios exclusivos.'
    },
    {
      image: 'assets/home/cine2.jpg',
      title: 'Descuentos especiales',
      description: 'Promociones únicas para toda la familia.'
    },
    {
      image: 'assets/home/hottt.jpg',
      title: '¡Las ofertas mas hot ya están aquí!',
      description: 'Porque cuando encuentras algo que realmente vale la pena… el que duda, lo pierde. Hasta 50% OFF+ hasta 24 MSI con TDC participantes'
    },
    {
      image: 'assets/home/sandalias.jpg',
      title: 'Moda de temporada',
      description: 'Los mejores planes empiezan con los pies en la arena.'
    },
    {
      image: 'assets/home/boston.jpg',
      title: 'Zona de comida',
      description: 'Porque mamá también merece un plan para disfrutar. Invítala a Boston Mérida '
    },
    {
      image: 'assets/home/full.jpg',
      title: 'Rebajas',
      description: '¡No te pierdas esta oferta de tiempo limitado en Studio F México!'
    },
    {
      image: 'assets/home/promo1.jpg',
      title: 'Promos destacadas',
      description: 'Si las estampas repetidas ya se están acumulando, es momento de cambiarlas por las que sí necesitas'
    }
  ];

  get visiblePromotions(): Promotion[] {
    const start = this.currentPromoGroup * 4;
    return this.promotions.slice(start, start + 4);
  }

  ngOnInit(): void {
    this.startCarousel();
    this.startPromotionsCarousel();
  }

  ngOnDestroy(): void {
    this.stopCarousel();
    this.stopPromotionsCarousel();
  }

  startCarousel(): void {
    this.stopCarousel();

    this.intervalId = setInterval(() => {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
      this.cdr.detectChanges();
    }, 3000);
  }

  stopCarousel(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  goToSlide(index: number): void {
    this.currentSlide = index;
    this.cdr.detectChanges();
    this.startCarousel();
  }

  startPromotionsCarousel(): void {
    this.stopPromotionsCarousel();

    this.promoIntervalId = setInterval(() => {
      const totalGroups = Math.ceil(this.promotions.length / 4);
      this.currentPromoGroup = (this.currentPromoGroup + 1) % totalGroups;
      this.cdr.detectChanges();
    }, 5000);
  }

  stopPromotionsCarousel(): void {
    if (this.promoIntervalId) {
      clearInterval(this.promoIntervalId);
      this.promoIntervalId = null;
    }
  }
}