import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'candy',
        loadComponent:()=>import('./Pages/candy/candy').then((archivo)=> archivo.Candy),
    },
    {
        path: 'login',
        loadComponent:()=>import('./Pages/login/login').then((archivo)=> archivo.Login),
    },
    {
        path: 'usuario',
        loadComponent:()=>import('./Pages/usuario/usuario').then((archivo)=> archivo.Usuario),
    },
    //Este siempre va al final
    {
        path: '**',
        loadComponent:()=>import('./Pages/error/error').then((archivo)=> archivo.Error),
    }
];
