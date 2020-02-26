import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewTenderComponent } from './new-tender/new-tender.component';
import { CreateFormComponent } from './create-form/create-form.component';
import { ReferencesComponent } from './references/references.component';
import { PagesComponent } from './pages.component';
import { EvaluationModelComponent } from './evaluation-model/evaluation-model.component';
import { CompletedComponent } from './completed/completed.component';

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
            },
            {
                path: 'references',
                component: ReferencesComponent
            },
            {
                path: 'evaluation-model',
                component: EvaluationModelComponent
            },
            {
                path: 'completed',
                component: CompletedComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PagesRoutingModule { }
