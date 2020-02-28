import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PagesService } from '../pages.service';

@Component({
  selector: 'app-evaluation-model',
  templateUrl: './evaluation-model.component.html',
  styleUrls: ['./evaluation-model.component.css']
})
export class EvaluationModelComponent implements OnInit {
  evaulationForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private pagesService: PagesService,
    private router: Router,
  ) { }

  ngOnInit() {
    window.localStorage.setItem('progress', '75');
    setTimeout(() => {
      this.pagesService.setProgressValue({ value: 75 });
    });

    this.evaulationForm = this.formBuilder.group({
      Specification: ['category'],
      Process: ['process'],
      Subproject: ['subproject'],
      Meaning: ['meaning'],
      Evaluation: ['evaluation'],
      College: [''],
      Degree: [''],
      Amount: [''],
      Working: [''],
      Specialist: [''],
      Comparable: [''],
      ExperienceAmount: [''],
      RankingTraining: [''],
      Experience: [''],
      References: [''],
      Award: [''],
      RankingAmount: [''],
      OutSourcer: [''],
      Manager: [''],
      Others: [''],
      Behavior: [''],
      Cooperation: [''],
      WorkingResults: [''],
      Recommendation: [''],
      ReferencesAmount: [''],
      AwardProcess: [''],
      Consultant: [''],
      AwardAmount: [''],
    });
  }

  onSubmit() {
    window.localStorage.setItem('progress', '100');
    this.router.navigate(['/pages/completed']);
  }
}
