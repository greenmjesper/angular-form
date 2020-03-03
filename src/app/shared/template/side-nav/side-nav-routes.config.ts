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
        title: 'Pages',
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
    }
]