import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateFormComponent } from './create-form/create-form.component';
import { NewTenderComponent } from './new-tender/new-tender.component';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PagesService } from './pages.service';
import { ReferencesComponent } from './references/references.component';
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

@NgModule({
  declarations: [CreateFormComponent, NewTenderComponent, PagesComponent, ReferencesComponent, EvaluationModelComponent, CompletedComponent, SummaryComponent, TenderFormComponent, ReportCreditComponent, MunicipalityComponent, ConsultantComponent, ReferenceQuestionsComponent, SummaryInfoComponent, SummaryProvidedComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class PagesModule { }
