import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { StoreComponent } from './store/store.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'store', component: StoreComponent },
  { path: 'error', component: ErrorComponent },

  { path: '**', redirectTo: '/error', pathMatch: 'full' },
];
