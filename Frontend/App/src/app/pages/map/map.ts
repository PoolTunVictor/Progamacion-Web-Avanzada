import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface StoreLocation {
  id: number;
  name: string;
  category: string;
  floor: 'alta' | 'baja';
  x: number;
  y: number;
}

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './map.html',
  styleUrl: './map.css',
})
export class Map {
  searchTerm = '';
  selectedCategory = 'Todos';
  selectedFloor: 'alta' | 'baja' = 'alta';
  selectedStoreId: number | null = null;

  categories: string[] = [
    'Todos',
    'Moda',
    'Accesorios',
    'Bancos',
    'Belleza',
    'Alimentos',
    'Entretenimiento',
    'Tecnología'
  ];

stores: StoreLocation[] = [
  // PLANTA ALTA
  { id: 109, name: 'Food Court', category: 'Alimentos', floor: 'alta', x: 35.8, y: 33.5 },
  { id: 180, name: 'Game Planet', category: 'Entretenimiento', floor: 'alta', x: 47.8, y: 35.5 },
  { id: 121, name: 'Pandora', category: 'Accesorios', floor: 'alta', x: 53.7, y: 35.5 },
  { id: 140, name: 'BBVA', category: 'Bancos', floor: 'alta', x: 73.5, y: 69.5 },
  { id: 141, name: 'Zara', category: 'Moda', floor: 'alta', x: 74.2, y: 66.5 },
  { id: 142, name: 'Nike', category: 'Moda', floor: 'alta', x: 77.8, y: 63.5 },
  { id: 143, name: 'American Eagle', category: 'Moda', floor: 'alta', x: 81.5, y: 60.5 },
  { id: 144, name: 'Starbucks', category: 'Alimentos', floor: 'alta', x: 65.5, y: 63.5 },
  { id: 145, name: 'Yelori', category: 'Alimentos', floor: 'alta', x: 64.5, y: 61 },
  { id: 146, name: 'Liverpool', category: 'Moda', floor: 'alta', x: 69.5, y: 74.5 },
  { id: 147, name: 'Miniso', category: 'Accesorios', floor: 'alta', x: 67.5, y: 71 },
  { id: 148, name: 'Telcel', category: 'Tecnología', floor: 'alta', x: 31.5, y: 36.5 },
  { id: 149, name: 'Suburbia', category: 'Moda', floor: 'alta', x: 72, y: 77.5 },
  { id: 150, name: 'MacStore', category: 'Tecnología', floor: 'alta', x: 58.2, y: 25.5 },
  { id: 151, name: 'Office Depot', category: 'Tecnología', floor: 'alta', x: 40.5, y: 21.5 },
  { id: 152, name: 'Bershka', category: 'Moda', floor: 'alta', x: 75.5, y: 83 },
  { id: 153, name: 'H&M', category: 'Moda', floor: 'alta', x: 78.5, y: 80.5 },
  { id: 154, name: 'Pull & Bear', category: 'Moda', floor: 'alta', x: 81, y: 78 },
  { id: 155, name: 'Stradivarius', category: 'Moda', floor: 'alta', x: 83, y: 75.5 },
  { id: 156, name: 'Cinépolis', category: 'Entretenimiento', floor: 'alta', x: 71.5, y: 86 },

  // PLANTA BAJA
  { id: 1, name: 'SEARS', category: 'Moda', floor: 'baja', x: 12.5, y: 25.5 },
  { id: 33, name: 'Sanborns', category: 'Alimentos', floor: 'baja', x: 74.5, y: 44.5 },
  { id: 42, name: 'Liverpool', category: 'Moda', floor: 'baja', x: 82.5, y: 82 },
  { id: 47, name: 'Zara', category: 'Moda', floor: 'baja', x: 69.5, y: 70 },
  { id: 87, name: 'Altaria Bowling', category: 'Entretenimiento', floor: 'baja', x: 38.5, y: 42 },
  { id: 97, name: 'Caseta 1', category: 'Belleza', floor: 'baja', x: 25.5, y: 75 },
  { id: 98, name: 'Dolorfín', category: 'Belleza', floor: 'baja', x: 7.5, y: 11 },
  { id: 99, name: 'GNC', category: 'Belleza', floor: 'baja', x: 10.8, y: 11 },
  { id: 100, name: 'Coco Tea', category: 'Alimentos', floor: 'baja', x: 14, y: 11 },
  { id: 101, name: 'Krispy Kreme', category: 'Alimentos', floor: 'baja', x: 52, y: 8 },
  { id: 102, name: 'Sally Beauty', category: 'Belleza', floor: 'baja', x: 62.5, y: 73 },
  { id: 103, name: 'Telcel', category: 'Tecnología', floor: 'baja', x: 67.5, y: 63 },
  { id: 104, name: 'AT&T', category: 'Tecnología', floor: 'baja', x: 69.8, y: 53.5 },
  { id: 105, name: 'Subway', category: 'Alimentos', floor: 'baja', x: 75, y: 69 },
  { id: 106, name: 'Santander', category: 'Bancos', floor: 'baja', x: 76, y: 39.5 },
  { id: 107, name: 'Cuidado con el Perro', category: 'Moda', floor: 'baja', x: 56, y: 47 }
];

  get filteredStores(): StoreLocation[] {
    return this.stores.filter((store) => {
      const sameFloor = store.floor === this.selectedFloor;

      const sameCategory =
        this.selectedCategory === 'Todos' ||
        store.category === this.selectedCategory;

      const matchesSearch =
        store.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        store.id.toString().includes(this.searchTerm);

      return sameFloor && sameCategory && matchesSearch;
    });
  }

  get currentMapImage(): string {
    return this.selectedFloor === 'alta'
      ? 'assets/planta_alta.png'
      : 'assets/planta_baja.png';
  }

  selectStore(storeId: number): void {
    this.selectedStoreId = storeId;
  }

  changeFloor(floor: 'alta' | 'baja'): void {
    this.selectedFloor = floor;
    this.selectedStoreId = null;
  }

  isSelected(store: StoreLocation): boolean {
    return this.selectedStoreId === store.id;
  }
}