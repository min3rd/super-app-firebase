import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'public' },
  {
    path: 'public',
    loadChildren: () => import('./modules/public/public.routes').then(r => r.routes),
  }
];
