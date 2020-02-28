import { Routes } from '@angular/router';

export const CommonLayout_ROUTES: Routes = [
    // {
    //     path: 'pages',
    //     loadChildren: () => import('../../pages/pages.module').then(m => m.PagesModule)
    // },
    {
        path: 'dashboard',
        loadChildren: () => import('../../dashboard/dashboard.module').then(m => m.DashboardModule)
    },
    {
        path: 'pages',
        data: {
            title: 'Pages '
        },
        children: [
            {
                path: '',
                redirectTo: '/pages/new-tender',
                pathMatch: 'full'
            }, 
            {
                path: '',
                loadChildren: () => import('../../pages/pages.module').then(m => m.PagesModule)
            },
        ]    
    }
];