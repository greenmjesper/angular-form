import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewTenderComponent } from './new-tender/new-tender.component';
import { CreateFormComponent } from './create-form/create-form.component';
import { ReferencesComponent } from './references/references.component';
import { PagesComponent } from './pages.component';
import { EvaluationModelComponent } from './evaluation-model/evaluation-model.component';
import { CompletedComponent } from './completed/completed.component';
import { SummaryComponent } from './summary/summary.component';
import { TenderFormComponent } from './tender-form/tender-form.component';
import { ReportCreditComponent } from './report-credit/report-credit.component';
import { MunicipalityComponent } from './municipality/municipality.component';
import { ConsultantComponent } from './consultant/consultant.component';
import { ReferenceQuestionsComponent } from './reference-questions/reference-questions.component';
import { SummaryInfoComponent } from './summary-info/summary-info.component';
import { SummaryProvidedComponent } from './summary-provided/summary-provided.component';

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
    {
        path: 'tender-form',
        component: TenderFormComponent,
        data: {
            title: 'Tender Form'
        }
    },
    {
        path: 'report-credit',
        component: ReportCreditComponent,
        data: {
            title: 'Report Credit'
        }
    },
    {
        path: 'municipality',
        component: MunicipalityComponent,
        data: {
            title: 'Municipality'
        },
    },
    {
        path: 'consultant',
        component: ConsultantComponent,
        data: {
            title: 'Consultant'
        },
    },
    {
        path: 'reference-questions',
        component: ReferenceQuestionsComponent,
        data: {
            title: 'References'
        },
    },
    {
        path: 'summary-info',
        component: SummaryInfoComponent,
        data: {
            title: 'Summary provide information'
        },
    },
    {
        path: 'summary-provided',
        component: SummaryProvidedComponent,
        data: {
            title: 'Summary provided information'
        },
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PagesRoutingModule { }
