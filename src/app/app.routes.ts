import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'tab4',
    loadComponent: () => import('./tab4/tab4.page').then( m => m.Tab4Page)
  },
  {
    path: 'numbers',
    loadComponent: () => import('./numbers/numbers.page').then( m => m.NumbersPage)
  },
  {
    path: 'alphabets',
    loadComponent: () => import('./alphabets/alphabets.page').then( m => m.AlphabetsPage)
  },
  {
    path: 'shapes',
    loadComponent: () => import('./shapes/shapes.page').then( m => m.ShapesPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
];
