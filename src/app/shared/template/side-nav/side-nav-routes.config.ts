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
        path: '',
        title: 'Pages',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        icon: 'appstore',
        submenu: [
            {
                path: 'new-tender',
                title: 'New Tender',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: [
                ]
            },
            {
                path: 'create-form',
                title: 'Create Form',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: [
                ]
            },
            {
                path: 'references',
                title: 'References',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: [
                ]
            },
            {
                path: 'evaluation-model',
                title: 'Evaluation',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: [
                ]
            }
        ]
    }
]