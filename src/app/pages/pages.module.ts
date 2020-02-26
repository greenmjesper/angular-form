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

@NgModule({
  declarations: [CreateFormComponent, NewTenderComponent, PagesComponent, ReferencesComponent, EvaluationModelComponent, CompletedComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [PagesService]
})
export class PagesModule { }
