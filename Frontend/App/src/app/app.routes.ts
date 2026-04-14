import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout';
import { Directory } from './pages/directory/directory';
import { Map } from './pages/map/map';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: 'directorio', component: Directory },
      { path: 'mapa', component: Map }
    ]
  }
];