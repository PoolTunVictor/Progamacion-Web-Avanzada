import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Category {
  name: string;
  icon: string;
}

interface Store {
  name: string;
  category: string;
  logoText: string;
  logoClass: string;
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

  categories: Category[] = [
    { name: 'Todos', icon: '⌕' },
    { name: 'Accesorios', icon: '👜' },
    { name: 'Alimentos', icon: '🍔' },
    { name: 'Bancos', icon: '🏛️' },
    { name: 'Belleza', icon: '💄' },
    { name: 'Moda Dama', icon: '👗' },
    { name: 'Zapaterías', icon: '👠' },
    { name: 'Agencias de Viajes', icon: '✈️' },
    { name: 'Bolsas', icon: '🛍️' },
    { name: 'Comida Rápida', icon: '🍟' },
    { name: 'Deportes', icon: '⚽' },
    { name: 'Dulces', icon: '🍭' },
    { name: 'Entretenimiento', icon: '🎭' },
    { name: 'Especialidades', icon: '⭐' },
  ];

  stores: Store[] = [
    { name: '98 Coast Av.', category: 'Moda Dama', logoText: '98', logoClass: 'logo-orange' },
    { name: '+Visión', category: 'Accesorios', logoText: '+Visión', logoClass: 'logo-red' },
    { name: 'Abito', category: 'Moda Dama', logoText: 'abito', logoClass: 'logo-black' },
    { name: 'Adidas', category: 'Deportes', logoText: 'adidas', logoClass: 'logo-black' },
    { name: 'Alabama Mamma', category: 'Alimentos', logoText: 'ALABAMA', logoClass: 'logo-brown' },

    { name: 'Ann Chery', category: 'Moda Dama', logoText: 'ANN CHERY', logoClass: 'logo-gold' },
    { name: 'Banamex', category: 'Bancos', logoText: 'Banamex', logoClass: 'logo-blue' },
    { name: 'Inbursa Trattoria', category: 'Alimentos', logoText: 'INBURSA', logoClass: 'logo-blue' },
    { name: 'Inbursa', category: 'Bancos', logoText: 'INBURSA', logoClass: 'logo-navy' },
    { name: 'Ben & Frank', category: 'Accesorios', logoText: 'BEN & FRANK', logoClass: 'logo-pink' },

    { name: 'Bauer', category: 'Accesorios', logoText: 'BAUER', logoClass: 'logo-outline' },
    { name: 'BBVA', category: 'Bancos', logoText: 'BBVA', logoClass: 'logo-blue' },
    { name: 'Bellísima', category: 'Belleza', logoText: 'BELLÍSIMA', logoClass: 'logo-gray' },
    { name: 'Ben & Frank 2', category: 'Accesorios', logoText: 'BEN & FRANK', logoClass: 'logo-black' },
    { name: 'Bissú', category: 'Belleza', logoText: 'Bissú', logoClass: 'logo-black' },
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
}