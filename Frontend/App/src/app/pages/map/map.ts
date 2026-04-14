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
    'Entretenimiento'
  ];

  stores: StoreLocation[] = [
    // PLANTA ALTA
    { id: 109, name: 'Food Court', category: 'Alimentos', floor: 'alta', x: 33.5, y: 37 },
    { id: 180, name: 'Local 180', category: 'Moda', floor: 'alta', x: 47.5, y: 38.5 },
    { id: 121, name: 'Local 121', category: 'Accesorios', floor: 'alta', x: 56.5, y: 30 },
    { id: 140, name: 'Local 140', category: 'Bancos', floor: 'alta', x: 77, y: 63.5 },

    // PLANTA BAJA
    { id: 1, name: 'SEARS', category: 'Moda', floor: 'baja', x: 10.5, y: 26 },
    { id: 33, name: 'Local 33', category: 'Moda', floor: 'baja', x: 73, y: 47 },
    { id: 42, name: 'Local 42', category: 'Alimentos', floor: 'baja', x: 81, y: 80 },
    { id: 47, name: 'Local 47', category: 'Accesorios', floor: 'baja', x: 68.5, y: 67.5 },
    { id: 87, name: 'Local 87', category: 'Entretenimiento', floor: 'baja', x: 36.5, y: 38.5 },
    { id: 97, name: 'Local 97', category: 'Belleza', floor: 'baja', x: 25.5, y: 69 }
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
      ? '/planta_alta.png'
      : '/planta_baja.png';
  }

  selectStore(storeId: number): void {
    this.selectedStoreId = storeId;
  }

  selectCategory(category: string): void {
    this.selectedCategory = category;
  }

  changeFloor(floor: 'alta' | 'baja'): void {
    this.selectedFloor = floor;
    this.selectedStoreId = null;
  }

  isSelected(store: StoreLocation): boolean {
    return this.selectedStoreId === store.id;
  }
}