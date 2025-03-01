import { Routes } from "@angular/router";
import { HomePage } from "./home/home.page";
import { LogInComponent } from "./auth/log-in/log-in.component";

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    title: ' home',
    component: HomePage
  },
  {
    path: 'log-in',
    title: 'Log in',
    component: LogInComponent
  }
];
