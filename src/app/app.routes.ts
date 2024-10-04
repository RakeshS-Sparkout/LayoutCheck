import { Routes } from '@angular/router';
import { App1Component } from './components/app1/app1.component';
import { App2Component } from './components/app2/app2.component';
import { App3Component } from './components/app3/app3.component';

export const routes: Routes = [
    {
        path: 'home',
        loadComponent: () => import('./components/app1/app1.component').then((m) => m.App1Component)
    },
    {
        path: 'company',
        loadComponent: () => import('./components/app2/app2.component').then((m) => m.App2Component)
    },
    {
        path: 'marketplace',
        loadComponent: () => import('./components/app3/app3.component').then((m) => m.App3Component)
    },
    {
        path: 'features',
        loadComponent: () => import('./components/app4/app4.component').then((m) => m.App4Component)
    }
];
