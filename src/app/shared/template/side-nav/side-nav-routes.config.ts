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
        path: 'pages',
        title: 'Flow 1',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        icon: 'appstore',
        submenu: [
            {
                path: '/pages/new-tender',
                title: 'New Tender',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: [
                ]
            },
            {
                path: '/pages/create-form',
                title: 'Create Form',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: [
                ]
            },
            {
                path: '/pages/references',
                title: 'References',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: [
                ]
            },
            {
                path: '/pages/evaluation-model',
                title: 'Evaluation',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: [
                ]
            },
            {
                path: '/pages/summary',
                title: 'Summary',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: [
                ]
            }
        ]
    },
    {
        path: 'pages',
        title: 'Flow 2',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        icon: 'appstore',
        submenu: [
            {
                path: '/pages/tender-form',
                title: 'Tender form supplier',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: [
                ]
            },
            {
                path: '/pages/report-credit',
                title: 'Report Credit',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: [
                ]
            },
            {
                path: '/pages/municipality',
                title: 'Municipality',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: [
                ]
            },
            {
                path: '/pages/consultant',
                title: 'Consultant',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: [
                ]
            },
            {
                path: '/pages/reference-questions',
                title: 'References',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: [
                ]
            },
            {
                path: '/pages/summary-info',
                title: 'Summary information',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: [
                ]
            },
            {
                path: '/pages/summary-provided',
                title: 'Summary provided information',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: [
                ]
            },
        ]
    }
]