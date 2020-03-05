import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PagesService } from '../pages.service';

@Component({
  selector: 'app-report-credit',
  templateUrl: './report-credit.component.html',
  styleUrls: ['./report-credit.component.css']
})
export class ReportCreditComponent implements OnInit {
  reportCreditForm: FormGroup;
  constructor(
    private pagesService: PagesService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.pagesService.setProgressValue({ value: 14 });
    });

    this.reportCreditForm = this.formBuilder.group({
      reportCredit: ['Leverantörens bolagsnamn'],
    });
  }

  onSubmit() {
    this.router.navigate(['/pages/municipality']);
  }

}
