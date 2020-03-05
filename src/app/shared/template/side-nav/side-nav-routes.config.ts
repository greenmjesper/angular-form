import { SideNavInterface } from '../../interfaces/side-nav.type';
export const ROUTES: SideNavInterface[] = [
    // {
    //     path: '',
    //     title: 'Dashboard',
    //     iconType: 'nzIcon',
    //     iconTheme: 'outline',
    //     icon: 'dashboard',
    //     submenu: []
    // },
    {
        path: 'Pages',
        title: 'Upphandlare',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        icon: 'appstore',
        submenu: [
            {
                path: '/pages/new-tender',
                title: 'Ny Upphandling',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: [
                ]
            },
            {
                path: '/pages/create-form',
                title: 'Skapa formulär',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: [
                ]
            },
            {
                path: '/pages/references',
                title: 'Referenser',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: [
                ]
            },
            {
                path: '/pages/evaluation-model',
                title: 'Utvärdering',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: [
                ]
            },
            {
                path: '/pages/summary',
                title: 'Summering',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: [
                ]
            }
        ]
    },
    {
        path: 'Pages',
        title: 'Leverantör',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        icon: 'appstore',
        submenu: [
            {
                path: '/pages/tender-form',
                title: 'Anbud',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: [
                ]
            },
            {
                path: '/pages/report-credit',
                title: 'Vandelsprövning',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: [
                ]
            },
            {
                path: '/pages/municipality',
                title: 'Anbudsförfrå',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: [
                ]
            },
            {
                path: '/pages/consultant',
                title: 'Konsulten',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: [
                ]
            },
            {
                path: '/pages/reference-questions',
                title: 'Referenser',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: [
                ]
            },
            {
                path: '/pages/summary-info',
                title: 'Summering information',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: [
                ]
            },
            {
                path: '/pages/summary-provided',
                title: 'Summering lämnad information',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: [
                ]
            },
        ]
    }
]