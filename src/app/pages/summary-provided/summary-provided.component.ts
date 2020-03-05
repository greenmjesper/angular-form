import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PagesService } from '../pages.service';

@Component({
  selector: 'app-summary-provided',
  templateUrl: './summary-provided.component.html',
  styleUrls: ['./summary-provided.component.css']
})
export class SummaryProvidedComponent implements OnInit {
  summaryProvidedForm: FormGroup;
  provided = [
    {
      key: '1',
      name: 'Konsulten har över 10 år erfarenhet från rekryteringsuppdrag:​',
    },
    {
      key: '2',
      name: 'Konsulten här över 5 års erfarenhet som specialist från rekrytering av chefer till offentlig sektor:​​',
    },
    {
      key: '3',
      name: 'Konsulten är certifierad i Phykometrikas testverktyg:​',
    },
    {
      key: '4',
      name: 'Konsulten har högskoleutbildning inom juridik med akademisk​ kandidat examen:​​',
    },
    {
      key: '5',
      name: 'Konsulten har inte någon övrig utbildning:​',
    },
    {
      key: '6',
      name: 'Priset för rekryteringsuppdraget offereras till 00000 00 sek',
    },
    {
      key: '7',
      name: 'Referenser har skickat till följande företag och personer',
    }
  ];
  parserPercent = (value: string) => value.replace(' %', '');
  formatterPercent = (value: number) => `${value} %`;

  constructor(
    private pagesService: PagesService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.pagesService.setProgressValue({ value: 84 });
    });
    this.summaryProvidedForm = this.formBuilder.group({
      point1: [''],
      point2: [''],
      point3: [''],
      point4: [''],
      point5: [''],
      point6: [''],
      weight1: [''],
      weight2: [''],
      weight3: [''],
      weight4: [''],
      weight5: [''],
      weight6: [''],
      refer1: [''],
      refer2: [''],
      refer3: [''],
    });
  }

  onSubmit() {
    this.router.navigate(['/pages/completed']);
  }
}
