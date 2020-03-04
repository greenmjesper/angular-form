import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PagesService } from '../pages.service';

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.css']
})
export class ReferencesComponent implements OnInit {
  referencesForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private pagesService: PagesService,
    private router: Router,
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.pagesService.setProgressValue({ value: 40 });
    });

    this.referencesForm = this.formBuilder.group({
      Person: [''],
      Relation: [''],
      ConsumerStrength: [''],
      Behavior: [''],
      ConsumerWeakness: [''],
      Relation2: [''],
      InterpersonalSkills: [''],
      SkillsSlider: [''],
      HandleStress: [''],
      StressSlider: [''],
      WorkingResults: [''],
      WorkingResultsSlider: [''],
      Presence: [''],
      PresenceSlider: [''],
      Addictions: [''],
      AddictionsSlider: [''],
      Recommend: [''],
      RecommendSlider: [''],
      ColdSchedules: [''],
      ColdSchedulesSlider: [''],
    });
  }

  onSubmit() {
    this.router.navigate(['/pages/evaluation-model']);
  }
}
