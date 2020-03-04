import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PagesService } from '../pages.service';

@Component({
  selector: 'app-tender-form',
  templateUrl: './tender-form.component.html',
  styleUrls: ['./tender-form.component.css']
})
export class TenderFormComponent implements OnInit {
  tenderForm: FormGroup;
  constructor(
    private pagesService: PagesService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.pagesService.setProgressValue({ value: 0 });
    });

    this.tenderForm = this.formBuilder.group({
      taxAndFeePaid: [''],
      knipenSverige: [''],
      mesk: [''],
      honor: [''],
    });
  }

  onSubmit() {
    this.router.navigate(['/pages/report-credit']);
  }

}
