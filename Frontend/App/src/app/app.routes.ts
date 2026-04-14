import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout';
// Cambia la ruta a esta (quitamos el ".component"):
import { ContactoComponent } from './pages/contacto/contacto'; 

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: 'contacto', component: ContactoComponent }
    ]
  }
];