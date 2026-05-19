import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout';
import { HomeComponent } from './pages/home/home';
import { Eventos } from './pages/eventos/eventos';
import { Map } from './pages/map/map';
import { Directory } from './pages/directory/directory';
import { ContactoComponent } from './pages/contacto/contacto';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'eventos',
        component: Eventos

      },
      {
        path: 'mapa',
        component: Map
      },
      {
        path: 'directorio',
        component: Directory
      },
      {
        path: 'contacto',
        component: ContactoComponent
      }
    ]
  }
];