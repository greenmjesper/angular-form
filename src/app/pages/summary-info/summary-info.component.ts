import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PagesService } from '../pages.service';

@Component({
  selector: 'app-summary-info',
  templateUrl: './summary-info.component.html',
  styleUrls: ['./summary-info.component.css']
})
export class SummaryInfoComponent implements OnInit {
  summaryInfoForm: FormGroup;
  guaranteed = [
    {
      key: '1',
      name: 'Bolaget har inte varit dömt för några ekonomiska ​eller andra brott:​',
    },
    {
      key: '2',
      name: 'Bolaget uppfyller kommunens krav på kreditvärdighet:​',
    },
    {
      key: '3',
      name: 'Bolaget har en giltig ansvars försäkran:​',
    },
    {
      key: '4',
      name: 'Garanti att lämnade uppgifter stämmer:​',
    },
    {
      key: '5',
      name: 'Konsulten har mer än fem års arbetslivserfarenhet som rekryteringskonsult:​',
    },
    {
      key: '6',
      name: 'Konsulten har erfarenhet från minst tre rekryteringsprocesser på motsvarande nivå inom en två års period från 202003:',
    },
  ];

  constructor(
    private formBuilder: FormBuilder,
    private pagesService: PagesService,
    private router: Router,
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.pagesService.setProgressValue({ value: 70 });
    });
    this.summaryInfoForm = this.formBuilder.group({
      checkValue1: ['true'],
      checkValue2: ['true'],
      checkValue3: ['true'],
      checkValue4: ['true'],
      checkValue5: ['true'],
      checkValue6: ['true'],
    });
  }

  onSubmit() {
    this.router.navigate(['/pages/summary-info']);
  }
}
