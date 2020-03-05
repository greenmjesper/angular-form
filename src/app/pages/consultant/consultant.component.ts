import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PagesService } from '../pages.service';

@Component({
  selector: 'app-consultant',
  templateUrl: './consultant.component.html',
  styleUrls: ['./consultant.component.css']
})
export class ConsultantComponent implements OnInit {
  consultantForm: FormGroup;
  constructor(
    private pagesService: PagesService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.pagesService.setProgressValue({ value: 42 });
    });

    this.consultantForm = this.formBuilder.group({
      years: [''],
      publicSector: [''],
      personality: [''],
      education: [''],
      college: [''],
      degreeLevel: [''],
      otherEducation: [''],
      refer1: [''],
      refer2: [''],
      refer3: [''],
      prices: [''],
      processSearch: [''],
      executiveSearch: [''],
      secondOpinion: [''],
      recruitmentProcess: [''],
      tester: [''],
      senior: [''],
      junior: [''],
    });
  }

  onSubmit() {
    this.router.navigate(['/pages/consultant']);
  }

}
