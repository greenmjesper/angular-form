import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PagesService } from '../pages.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  summaryForm: FormGroup;
  tableContent = [
    {
      key: '1',
      name: 'Utbildning',
    },
    {
      key: '2',
      name: 'Erfarenhet',
    },
    {
      key: '3',
      name: 'Pris',
    },
    {
      key: '4',
      name: 'Totalt',
    },
  ];

  constructor(
    private formBuilder: FormBuilder,
    private pagesService: PagesService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    window.localStorage.setItem('progress', '80');
    setTimeout(() => {
      this.pagesService.setProgressValue({ value: 80 });
    });
    this.summaryForm = this.formBuilder.group({
      utbildningRanking: [''],
      erfarenhetRanking: [''],
      referenserRanking: [''],
      prisRanking: [''],
      totaltRanking: [''],
      utbildningPoang: [''],
      erfarenhetPoang: [''],
      referenserPoang: [''],
      prisPoang: [''],
      totaltPoang: [''],
      utbildningUppfyllnad: [''],
      erfarenhetUppfyllnad: [''],
      referenserUppfyllnad: [''],
      prisUppfyllnad: [''],
      totaltUppfyllnad: [''],
      utbildningKommentar: [''],
      erfarenhetKommentar: [''],
      referenserKommentar: [''],
      prisKommentar: [''],
      totaltKommentar: [''],
    });
  }

  onSubmit() {
    window.localStorage.setItem('progress', '100');
    this.router.navigate(['/pages/completed']);
  }
}
