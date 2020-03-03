import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewTenderComponent } from './new-tender/new-tender.component';
import { CreateFormComponent } from './create-form/create-form.component';
import { ReferencesComponent } from './references/references.component';
import { PagesComponent } from './pages.component';
import { EvaluationModelComponent } from './evaluation-model/evaluation-model.component';
import { CompletedComponent } from './completed/completed.component';
import { SummaryComponent } from './summary/summary.component';

const routes: Routes = [
    {
        path: 'new-tender',
        component: NewTenderComponent,
        data: {
            title: 'New Tender'
        }
    },
    {
        path: 'create-form',
        component: CreateFormComponent,
        data: {
            title: 'Create Form'
        }
    },
    {
        path: 'references',
        component: ReferencesComponent,
        data: {
            title: 'References'
        }
    },
    {
        path: 'evaluation-model',
        component: EvaluationModelComponent,
        data: {
            title: 'Evaluation'
        }
    },
    {
        path: 'completed',
        component: CompletedComponent,
        data: {
            title: 'Completed'
        }
    },
    {
        path: 'summary',
        component: SummaryComponent,
        data: {
            title: 'Summary'
        }
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PagesRoutingModule { }
