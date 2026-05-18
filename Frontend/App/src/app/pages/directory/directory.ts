import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Category {
  name: string;
}

interface Store {
  name: string;
  category: string;
  logoText: string;
  logoClass: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-directory',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './directory.html',
  styleUrl: './directory.css',
})
export class Directory {
  searchTerm = '';
  selectedCategory = 'Todos';
  selectedStore: Store | null = null;

  categories: Category[] = [
    { name: 'Todos' },
    { name: 'Accesorios' },
    { name: 'Alimentos' },
    { name: 'Bancos' },
    { name: 'Belleza' },
    { name: 'Moda Dama' },
    { name: 'Moda Caballero' },
    { name: 'Zapaterías' },
    { name: 'Agencias de Viajes' },
    { name: 'Bolsas' },
    { name: 'Comida Rápida' },
    { name: 'Deportes' },
    { name: 'Dulces' },
    { name: 'Entretenimiento' },
    { name: 'Especialidades' },
    { name: 'Tecnología' },
    { name: 'Telefonía' },
    { name: 'Restaurantes' },
    { name: 'Salud' },
    { name: 'Joyerías' },
    { name: 'Ópticas' },
  ];

  stores: Store[] = [
    {
      name: '98 Coast Av.',
      category: 'Moda Dama',
      logoText: '98',
      logoClass: 'logo-orange',
      image: 'assets/img/stores/98coast.jpg',
      description: 'Moda de playa fresca, colorida y cómoda para disfrutar cada momento bajo el sol.',
    },
    {
      name: '+Visión',
      category: 'Ópticas',
      logoText: '+Visión',
      logoClass: 'logo-red',
      image: 'assets/img/stores/masvision.jpg',
      description: 'Soluciones ópticas para cuidar tu vista con estilo, tecnología y atención personalizada.',
    },
    {
      name: 'Abito',
      category: 'Moda Caballero',
      logoText: 'abito',
      logoClass: 'logo-black',
      image: 'assets/img/stores/abito.jpg',
      description: 'Moda elegante y actual para quienes buscan vestir con presencia todos los días.',
    },
    {
      name: 'Adidas',
      category: 'Deportes',
      logoText: 'adidas',
      logoClass: 'logo-black',
      image: 'assets/img/stores/adidas.jpg',
      description: 'Ropa, calzado y accesorios deportivos para moverte con energía y estilo.',
    },
    {
      name: 'Alabama Mamma',
      category: 'Restaurantes',
      logoText: 'ALABAMA',
      logoClass: 'logo-brown',
      image: 'assets/img/stores/alabama.jpg',
      description: 'Comida con sabor casero, ambiente familiar y platillos ideales para compartir.',
    },
    {
      name: 'Ann Chery',
      category: 'Moda Dama',
      logoText: 'ANN CHERY',
      logoClass: 'logo-gold',
      image: 'assets/img/stores/annchery.jpg',
      description: 'Prendas diseñadas para resaltar tu figura con comodidad, seguridad y estilo.',
    },
    {
      name: 'Banamex',
      category: 'Bancos',
      logoText: 'Banamex',
      logoClass: 'logo-blue',
      image: 'assets/img/stores/banamex.jpg',
      description: 'Servicios financieros para realizar tus operaciones bancarias de forma práctica.',
    },
    {
      name: 'Inbursa Trattoria',
      category: 'Restaurantes',
      logoText: 'INBURSA',
      logoClass: 'logo-blue',
      image: 'assets/img/stores/inbursa-trattoria.jpg',
      description: 'Una opción gastronómica para disfrutar sabores casuales durante tu visita.',
    },
    {
      name: 'Inbursa',
      category: 'Bancos',
      logoText: 'INBURSA',
      logoClass: 'logo-navy',
      image: 'assets/img/stores/inbursa.jpg',
      description: 'Servicios bancarios y atención financiera para clientes personales y empresariales.',
    },
    {
      name: 'Ben & Frank',
      category: 'Ópticas',
      logoText: 'BEN & FRANK',
      logoClass: 'logo-pink',
      image: 'assets/img/stores/benfrank.jpg',
      description: 'Lentes modernos para ver bien y verte mejor con diseños frescos y accesibles.',
    },
    {
      name: 'Bauer',
      category: 'Joyerías',
      logoText: 'BAUER',
      logoClass: 'logo-outline',
      image: 'assets/img/stores/bauer.jpg',
      description: 'Joyería fina para momentos especiales, con piezas elegantes y atemporales.',
    },
    {
      name: 'BBVA',
      category: 'Bancos',
      logoText: 'BBVA',
      logoClass: 'logo-blue',
      image: 'assets/img/stores/bbva.jpg',
      description: 'Servicios bancarios para pagos, trámites, cuentas y atención financiera.',
    },
    {
      name: 'Bellísima',
      category: 'Belleza',
      logoText: 'BELLÍSIMA',
      logoClass: 'logo-gray',
      image: 'assets/img/stores/bellisima.jpg',
      description: 'Productos de maquillaje y belleza para expresar tu estilo todos los días.',
    },
    {
      name: 'Bissú',
      category: 'Belleza',
      logoText: 'Bissú',
      logoClass: 'logo-black',
      image: 'assets/img/stores/bissu.jpg',
      description: 'Maquillaje lleno de color para crear looks únicos, prácticos y modernos.',
    },
    {
      name: 'Cuidado con el Perro',
      category: 'Moda Dama',
      logoText: 'CCP',
      logoClass: 'logo-black',
      image: 'assets/img/stores/ccp.jpg',
      description: 'Moda urbana para vestir auténtico, cómodo y con mucha actitud.',
    },
    {
      name: 'Game Planet',
      category: 'Entretenimiento',
      logoText: 'GAME',
      logoClass: 'logo-red',
      image: 'assets/img/stores/gameplanet.jpg',
      description: 'Videojuegos, consolas y accesorios para llevar la diversión al siguiente nivel.',
    },
    {
      name: 'GNC',
      category: 'Salud',
      logoText: 'GNC',
      logoClass: 'logo-red',
      image: 'assets/img/stores/gnc.jpg',
      description: 'Productos para bienestar, nutrición y cuidado personal.',
    },
    {
      name: 'MacStore',
      category: 'Tecnología',
      logoText: 'MacStore',
      logoClass: 'logo-gray',
      image: 'assets/img/stores/macstore.jpg',
      description: 'Tecnología, accesorios y soluciones Apple para tu día a día.',
    },
    {
      name: 'Miniso',
      category: 'Especialidades',
      logoText: 'MINISO',
      logoClass: 'logo-red',
      image: 'assets/img/stores/miniso.jpg',
      description: 'Artículos útiles, bonitos y prácticos para hogar, regalos y uso diario.',
    },
    {
      name: 'Pandora',
      category: 'Joyerías',
      logoText: 'PANDORA',
      logoClass: 'logo-outline',
      image: 'assets/img/stores/pandora.jpg',
      description: 'Joyería y charms para contar historias especiales con cada pieza.',
    },
    {
      name: 'Sfera',
      category: 'Moda Dama',
      logoText: 'SFERA',
      logoClass: 'logo-black',
      image: 'assets/img/stores/sfera.jpg',
      description: 'Moda actual para crear outfits elegantes, cómodos y versátiles.',
    },
    {
      name: 'Starbucks',
      category: 'Alimentos',
      logoText: 'STARBUCKS',
      logoClass: 'logo-green',
      image: 'assets/img/stores/starbucks.jpg',
      description: 'Café, bebidas y alimentos para disfrutar una pausa durante tu visita.',
    },
    {
      name: 'Telcel',
      category: 'Telefonía',
      logoText: 'TELCEL',
      logoClass: 'logo-blue',
      image: 'assets/img/stores/telcel.jpg',
      description: 'Telefonía, planes, equipos y soluciones móviles para mantenerte conectado.',
    },
    {
      name: 'The Italian Coffee',
      category: 'Alimentos',
      logoText: 'COFFEE',
      logoClass: 'logo-brown',
      image: 'assets/img/stores/italian-coffee.jpg',
      description: 'Café y alimentos para acompañar tus compras con un momento de descanso.',
    },
    {
      name: 'Zara',
      category: 'Moda Dama',
      logoText: 'ZARA',
      logoClass: 'logo-black',
      image: 'assets/img/stores/zara.jpg',
      description: 'Moda contemporánea para crear looks modernos, elegantes y versátiles.',
    },
  ];

  get filteredStores(): Store[] {
    return this.stores.filter((store) => {
      const matchesCategory =
        this.selectedCategory === 'Todos' ||
        store.category === this.selectedCategory;

      const matchesSearch =
        store.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        store.category.toLowerCase().includes(this.searchTerm.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }

  selectCategory(category: string): void {
    this.selectedCategory = category;
  }

  openStoreModal(store: Store): void {
    this.selectedStore = store;
  }

  closeStoreModal(): void {
    this.selectedStore = null;
  }
}