import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PagesService } from '../pages.service';

@Component({
  selector: 'app-reference-questions',
  templateUrl: './reference-questions.component.html',
  styleUrls: ['./reference-questions.component.css']
})
export class ReferenceQuestionsComponent implements OnInit {
  referenceQuestionsForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private pagesService: PagesService
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.pagesService.setProgressValue({ value: 56 });
    });
    this.referenceQuestionsForm = this.formBuilder.group({
      relation: [''],
      assignments: [''],
      strength: [''],
      weaknesses: [''],
      skills: [''],
      schedules: [''],
      stress: [''],
      operatingResult: [''],
      attendance: [''],
      issues: [''],
      recommend: [''],
      employer: [''],
      name: [''],
      email: [''],
      phone: [''],
    });
  }

  onSubmit() {
    this.router.navigate(['/pages/reference-questions']);
  }

}
