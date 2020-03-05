import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PagesService } from '../pages.service';

@Component({
  selector: 'app-municipality',
  templateUrl: './municipality.component.html',
  styleUrls: ['./municipality.component.css']
})
export class MunicipalityComponent implements OnInit {
  municipalityCreditForm: FormGroup;

  constructor(
    private pagesService: PagesService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.pagesService.setProgressValue({ value: 28 });
    });

    this.municipalityCreditForm = this.formBuilder.group({
      recruitment: [''],
      experience: [''],
    });
  }

  onSubmit() {
    this.router.navigate(['/pages/consultant']);
  }

}
