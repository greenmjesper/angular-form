import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewTenderComponent } from './new-tender/new-tender.component';
import { CreateFormComponent } from './create-form/create-form.component';
import { PagesComponent } from './pages.component';

const routes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            {
                path: '',
                redirectTo: 'new-tender'
            },
            {
                path: 'new-tender',
                component: NewTenderComponent
            },
            {
                path: 'create-form',
                component: CreateFormComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PagesRoutingModule { }
