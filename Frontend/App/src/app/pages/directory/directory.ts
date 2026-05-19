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
    // ACCESORIOS
    {
      name: 'Ben & Frank',
      category: 'Accesorios',
      logoText: 'BEN & FRANK',
      logoClass: 'logo-black',
      image: 'assets/directory/BEN-AND-FRANK.jpg',
      description: 'Accesorios modernos para complementar tu estilo con personalidad y comodidad.',
    },
    {
      name: 'Miniso',
      category: 'Accesorios',
      logoText: 'MINISO',
      logoClass: 'logo-red',
      image: 'assets/directory/miniso.png',
      description: 'Artículos prácticos, bonitos y accesibles para tu día a día.',
    },
    {
      name: 'Pandora',
      category: 'Accesorios',
      logoText: 'PANDORA',
      logoClass: 'logo-outline',
      image: 'assets/directory/Pandora.jpg',
      description: 'Accesorios y piezas especiales para expresar tu estilo con elegancia.',
    },

    // ALIMENTOS
    {
      name: 'Starbucks',
      category: 'Alimentos',
      logoText: 'STARBUCKS',
      logoClass: 'logo-green',
      image: 'assets/directory/starbucks.png',
      description: 'Café, bebidas y alimentos para disfrutar una pausa durante tu visita.',
    },
    {
      name: 'The Italian Coffee',
      category: 'Alimentos',
      logoText: 'COFFEE',
      logoClass: 'logo-brown',
      image: 'assets/directory/italianCoffe.png',
      description: 'Café y alimentos para acompañar tus compras con un momento de descanso.',
    },
    {
      name: 'Coco Tea',
      category: 'Alimentos',
      logoText: 'COCO TEA',
      logoClass: 'logo-gold',
      image: 'assets/directory/cocotea.png',
      description: 'Bebidas frescas y sabores especiales para disfrutar algo diferente.',
    },

    // BANCOS
    {
      name: 'BBVA',
      category: 'Bancos',
      logoText: 'BBVA',
      logoClass: 'logo-blue',
      image: 'assets/directory/bbva.jpg',
      description: 'Servicios bancarios para pagos, trámites, cuentas y atención financiera.',
    },
    {
      name: 'Banamex',
      category: 'Bancos',
      logoText: 'Banamex',
      logoClass: 'logo-blue',
      image: 'assets/directory/banamex.jpg',
      description: 'Soluciones financieras para realizar tus operaciones de forma práctica.',
    },
    {
      name: 'Inbursa',
      category: 'Bancos',
      logoText: 'INBURSA',
      logoClass: 'logo-navy',
      image: 'assets/directory/inbursa.png',
      description: 'Servicios financieros para clientes personales y empresariales.',
    },

    // BELLEZA
    {
      name: 'Bellísima',
      category: 'Belleza',
      logoText: 'BELLÍSIMA',
      logoClass: 'logo-gray',
      image: 'assets/directory/belli.jpg',
      description: 'Productos de maquillaje y belleza para expresar tu estilo todos los días.',
    },
    {
      name: 'Bissú',
      category: 'Belleza',
      logoText: 'Bissú',
      logoClass: 'logo-black',
      image: 'assets/directory/bissu.jpg',
      description: 'Maquillaje lleno de color para crear looks únicos, prácticos y modernos.',
    },
    {
      name: 'Sally Beauty',
      category: 'Belleza',
      logoText: 'SALLY',
      logoClass: 'logo-red',
      image: 'assets/directory/sally.jpg',
      description: 'Productos profesionales para el cuidado del cabello, piel y belleza personal.',
    },

    // MODA DAMA
    {
      name: '98 Coast Av.',
      category: 'Moda Dama',
      logoText: '98',
      logoClass: 'logo-orange',
      image: 'assets/directory/98.png',
      description: 'Moda de playa fresca, colorida y cómoda para disfrutar cada momento bajo el sol.',
    },
    {
      name: 'Ann Chery',
      category: 'Moda Dama',
      logoText: 'ANN CHERY',
      logoClass: 'logo-gold',
      image: 'assets/directory/ann.jpg',
      description: 'Prendas diseñadas para resaltar tu figura con comodidad, seguridad y estilo.',
    },
    {
      name: 'Sfera',
      category: 'Moda Dama',
      logoText: 'SFERA',
      logoClass: 'logo-black',
      image: 'assets/directory/sfera.png',
      description: 'Moda actual para crear outfits elegantes, cómodos y versátiles.',
    },

    // MODA CABALLERO
    {
      name: 'Abito',
      category: 'Moda Caballero',
      logoText: 'abito',
      logoClass: 'logo-black',
      image: 'assets/img/stores/abito.jpg',
      description: 'Moda elegante y actual para quienes buscan vestir con presencia todos los días.',
    },
    {
      name: 'Adolfo Domínguez',
      category: 'Moda Caballero',
      logoText: 'AD',
      logoClass: 'logo-black',
      image: 'assets/img/stores/adolfo.jpg',
      description: 'Diseño sofisticado para vestir con elegancia, carácter y estilo propio.',
    },
    {
      name: 'Dockers',
      category: 'Moda Caballero',
      logoText: 'DOCKERS',
      logoClass: 'logo-brown',
      image: 'assets/img/stores/dockers.jpg',
      description: 'Ropa casual para un estilo cómodo, moderno y versátil.',
    },

    // ZAPATERÍAS
    {
      name: 'Flexi',
      category: 'Zapaterías',
      logoText: 'flexi',
      logoClass: 'logo-red',
      image: 'assets/img/stores/flexi.jpg',
      description: 'Calzado cómodo y moderno para acompañarte todos los días.',
    },
    {
      name: 'Dorothy Gaynor',
      category: 'Zapaterías',
      logoText: 'DOROTHY',
      logoClass: 'logo-black',
      image: 'assets/img/stores/dorothy.jpg',
      description: 'Zapatos y accesorios para lucir elegante en cualquier ocasión.',
    },
    {
      name: 'Calzado EFE',
      category: 'Zapaterías',
      logoText: 'EFE',
      logoClass: 'logo-outline',
      image: 'assets/img/stores/calzado-efe.jpg',
      description: 'Calzado para toda la familia con variedad de estilos y comodidad.',
    },

    // AGENCIAS DE VIAJES
    {
      name: 'Viajes Palacio',
      category: 'Agencias de Viajes',
      logoText: 'VIAJES',
      logoClass: 'logo-blue',
      image: 'assets/img/stores/viajes-palacio.jpg',
      description: 'Planea tus próximas vacaciones con asesoría y paquetes a tu medida.',
    },
    {
      name: 'Travel Zone',
      category: 'Agencias de Viajes',
      logoText: 'TRAVEL',
      logoClass: 'logo-gold',
      image: 'assets/img/stores/travel-zone.jpg',
      description: 'Experiencias de viaje diseñadas para descubrir nuevos destinos.',
    },
    {
      name: 'Mundo Joven',
      category: 'Agencias de Viajes',
      logoText: 'MUNDO',
      logoClass: 'logo-green',
      image: 'assets/img/stores/mundo-joven.jpg',
      description: 'Viajes, aventuras y experiencias para conocer el mundo.',
    },

    // BOLSAS
    {
      name: 'Bari Swimwear',
      category: 'Bolsas',
      logoText: 'BARI',
      logoClass: 'logo-pink',
      image: 'assets/img/stores/bari.jpg',
      description: 'Bolsas y accesorios ligeros para complementar tus looks de temporada.',
    },
    {
      name: 'Kipon',
      category: 'Bolsas',
      logoText: 'KIPON',
      logoClass: 'logo-black',
      image: 'assets/img/stores/kipon.jpg',
      description: 'Bolsas prácticas y modernas para acompañarte en tu rutina diaria.',
    },
    {
      name: 'Bizzarro Bags',
      category: 'Bolsas',
      logoText: 'BAGS',
      logoClass: 'logo-gold',
      image: 'assets/img/stores/bags.jpg',
      description: 'Accesorios y bolsos con estilo para cada ocasión.',
    },

    // COMIDA RÁPIDA
    {
      name: 'Subway',
      category: 'Comida Rápida',
      logoText: 'SUBWAY',
      logoClass: 'logo-green',
      image: 'assets/img/stores/subway.jpg',
      description: 'Comida rápida preparada al momento con ingredientes frescos.',
    },
    {
      name: 'Krispy Kreme',
      category: 'Comida Rápida',
      logoText: 'KRISPY',
      logoClass: 'logo-red',
      image: 'assets/img/stores/krispy.jpg',
      description: 'Donas, café y sabores dulces para disfrutar en cualquier momento.',
    },
    {
      name: 'Burger King',
      category: 'Comida Rápida',
      logoText: 'BK',
      logoClass: 'logo-brown',
      image: 'assets/img/stores/burger-king.jpg',
      description: 'Hamburguesas, papas y combos para comer rápido y con sabor.',
    },

    // DEPORTES
    {
      name: 'Adidas',
      category: 'Deportes',
      logoText: 'adidas',
      logoClass: 'logo-black',
      image: 'assets/img/stores/adidas.jpg',
      description: 'Ropa, calzado y accesorios deportivos para moverte con energía y estilo.',
    },
    {
      name: 'Dpstreet',
      category: 'Deportes',
      logoText: 'DP',
      logoClass: 'logo-blue',
      image: 'assets/img/stores/dpstreet.jpg',
      description: 'Moda deportiva y urbana para un estilo activo todos los días.',
    },
    {
      name: 'InnovaSport',
      category: 'Deportes',
      logoText: 'INNOVA',
      logoClass: 'logo-red',
      image: 'assets/img/stores/innovasport.jpg',
      description: 'Todo para entrenar, correr y vivir el deporte con rendimiento.',
    },

    // DULCES
    {
      name: 'Dulcería Candy',
      category: 'Dulces',
      logoText: 'CANDY',
      logoClass: 'logo-pink',
      image: 'assets/img/stores/candy.jpg',
      description: 'Dulces, chocolates y antojos para disfrutar un momento especial.',
    },
    {
      name: 'Yogufrut',
      category: 'Dulces',
      logoText: 'YOGU',
      logoClass: 'logo-green',
      image: 'assets/img/stores/yogufrut.jpg',
      description: 'Postres frescos y dulces para consentirte durante tu visita.',
    },
    {
      name: 'Helados Santa Clara',
      category: 'Dulces',
      logoText: 'HELADOS',
      logoClass: 'logo-blue',
      image: 'assets/img/stores/helados.jpg',
      description: 'Helados y postres fríos para refrescar tu día.',
    },

    // ENTRETENIMIENTO
    {
      name: 'Game Planet',
      category: 'Entretenimiento',
      logoText: 'GAME',
      logoClass: 'logo-red',
      image: 'assets/img/stores/gameplanet.jpg',
      description: 'Videojuegos, consolas y accesorios para llevar la diversión al siguiente nivel.',
    },
    {
      name: 'Cinépolis',
      category: 'Entretenimiento',
      logoText: 'CINÉPOLIS',
      logoClass: 'logo-blue',
      image: 'assets/img/stores/cinepolis.jpg',
      description: 'Películas, estrenos y experiencias para disfrutar en pantalla grande.',
    },
    {
      name: 'Altaria Bowling',
      category: 'Entretenimiento',
      logoText: 'BOWLING',
      logoClass: 'logo-red',
      image: 'assets/img/stores/bowling.jpg',
      description: 'Diversión, boliche y convivencia para pasar un buen rato en familia.',
    },

    // ESPECIALIDADES
    {
      name: 'Office Depot',
      category: 'Especialidades',
      logoText: 'OFFICE',
      logoClass: 'logo-red',
      image: 'assets/img/stores/office-depot.jpg',
      description: 'Papelería, tecnología y soluciones para escuela, oficina y trabajo.',
    },
    {
      name: 'Sanborns',
      category: 'Especialidades',
      logoText: 'SANBORNS',
      logoClass: 'logo-blue',
      image: 'assets/img/stores/sanborns.jpg',
      description: 'Libros, regalos, restaurante y artículos variados en un solo lugar.',
    },
    {
      name: 'Petco',
      category: 'Especialidades',
      logoText: 'PETCO',
      logoClass: 'logo-blue',
      image: 'assets/img/stores/petco.jpg',
      description: 'Productos y servicios para el cuidado de tus mascotas.',
    },

    // TECNOLOGÍA
    {
      name: 'MacStore',
      category: 'Tecnología',
      logoText: 'MacStore',
      logoClass: 'logo-gray',
      image: 'assets/img/stores/macstore.jpg',
      description: 'Tecnología, accesorios y soluciones Apple para tu día a día.',
    },
    {
      name: 'iShop',
      category: 'Tecnología',
      logoText: 'iShop',
      logoClass: 'logo-black',
      image: 'assets/img/stores/ishop.jpg',
      description: 'Productos tecnológicos y accesorios para mantenerte conectado.',
    },
    {
      name: 'Mobo',
      category: 'Tecnología',
      logoText: 'MOBO',
      logoClass: 'logo-blue',
      image: 'assets/img/stores/mobo.jpg',
      description: 'Accesorios tecnológicos para celular, audio y conectividad.',
    },

    // TELEFONÍA
    {
      name: 'Telcel',
      category: 'Telefonía',
      logoText: 'TELCEL',
      logoClass: 'logo-blue',
      image: 'assets/img/stores/telcel.jpg',
      description: 'Telefonía, planes, equipos y soluciones móviles para mantenerte conectado.',
    },
    {
      name: 'AT&T',
      category: 'Telefonía',
      logoText: 'AT&T',
      logoClass: 'logo-blue',
      image: 'assets/img/stores/att.jpg',
      description: 'Planes móviles, equipos y servicios de comunicación para todos.',
    },
    {
      name: 'Movistar',
      category: 'Telefonía',
      logoText: 'MOVISTAR',
      logoClass: 'logo-green',
      image: 'assets/img/stores/movistar.jpg',
      description: 'Conectividad móvil, equipos y planes para estar siempre comunicado.',
    },

    // RESTAURANTES
    {
      name: 'Alabama Mamma',
      category: 'Restaurantes',
      logoText: 'ALABAMA',
      logoClass: 'logo-brown',
      image: 'assets/img/stores/alabama.jpg',
      description: 'Comida con sabor casero, ambiente familiar y platillos ideales para compartir.',
    },
    {
      name: 'TGI Fridays',
      category: 'Restaurantes',
      logoText: 'FRIDAYS',
      logoClass: 'logo-red',
      image: 'assets/img/stores/fridays.jpg',
      description: 'Platillos americanos, bebidas y ambiente casual para reunirte con amigos.',
    },
    {
      name: 'Italiannis',
      category: 'Restaurantes',
      logoText: 'ITALIANNIS',
      logoClass: 'logo-green',
      image: 'assets/img/stores/italiannis.jpg',
      description: 'Comida italiana para compartir pastas, pizzas y momentos especiales.',
    },

    // SALUD
    {
      name: 'GNC',
      category: 'Salud',
      logoText: 'GNC',
      logoClass: 'logo-red',
      image: 'assets/img/stores/gnc.jpg',
      description: 'Productos para bienestar, nutrición y cuidado personal.',
    },
    {
      name: 'Farmacias YZA',
      category: 'Salud',
      logoText: 'YZA',
      logoClass: 'logo-blue',
      image: 'assets/img/stores/yza.jpg',
      description: 'Medicamentos, cuidado personal y productos de salud para tu familia.',
    },
    {
      name: 'Doctor Fin',
      category: 'Salud',
      logoText: 'DOCTOR',
      logoClass: 'logo-green',
      image: 'assets/img/stores/doctor-fin.jpg',
      description: 'Servicios de salud y bienestar para cuidar de ti y los tuyos.',
    },

    // JOYERÍAS
    {
      name: 'Bauer',
      category: 'Joyerías',
      logoText: 'BAUER',
      logoClass: 'logo-outline',
      image: 'assets/img/stores/bauer.jpg',
      description: 'Joyería fina para momentos especiales, con piezas elegantes y atemporales.',
    },
    {
      name: 'Cristal Joyas',
      category: 'Joyerías',
      logoText: 'CRISTAL',
      logoClass: 'logo-red',
      image: 'assets/img/stores/cristal.jpg',
      description: 'Joyas con brillo y elegancia para regalar o celebrar ocasiones especiales.',
    },
    {
      name: 'Tous',
      category: 'Joyerías',
      logoText: 'TOUS',
      logoClass: 'logo-gold',
      image: 'assets/img/stores/tous.jpg',
      description: 'Joyería y accesorios con diseño delicado, moderno y distintivo.',
    },

    // ÓPTICAS
    {
      name: '+Visión',
      category: 'Ópticas',
      logoText: '+Visión',
      logoClass: 'logo-red',
      image: 'assets/img/stores/masvision.jpg',
      description: 'Soluciones ópticas para cuidar tu vista con estilo, tecnología y atención personalizada.',
    },
    {
      name: 'Devlyn',
      category: 'Ópticas',
      logoText: 'DEVLYN',
      logoClass: 'logo-blue',
      image: 'assets/img/stores/devlyn.jpg',
      description: 'Lentes, armazones y servicios ópticos para ver bien y verte mejor.',
    },
    {
      name: 'Ópticas Espadas',
      category: 'Ópticas',
      logoText: 'ESPADAS',
      logoClass: 'logo-gray',
      image: 'assets/img/stores/opticas-espadas.jpg',
      description: 'Atención visual, lentes y armazones para distintas necesidades.',
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