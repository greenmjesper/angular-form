import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PagesService } from '../pages.service';
import { Router } from '@angular/router';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent implements OnInit {
  createForm: FormGroup;
  addFieldForm: FormGroup;

  modalIsVisible = false;
  addFieldInfoShow = false;
  type_of_field = null;

  constructor(
    private formBuilder: FormBuilder,
    private pagesService: PagesService,
    private router: Router,
  ) { }

  ngOnInit() {
    window.localStorage.setItem('progress', '25');
    setTimeout(() => {
      this.pagesService.setProgressValue({ value: 25 });
    });

    this.createForm = this.formBuilder.group({
      Approve: [''],
      Category: [''],
      Recruiting: [''],
      SetPoint: [''],
      Fields: [''],
    });
    this.addFieldForm = this.formBuilder.group({
      MultipleChoice: [''],
      firstCheck: ['false'],
      firstValue: [''],
      secondCheck: ['false'],
      secondValue: [''],
      additional_dropdown: [''],
      additionalScale: [''],
      additionalNps: [''],
    });
  }

  createModal(): void {
    this.modalIsVisible = true;
  }

  handleAdd(): void {
    this.modalIsVisible = false;
    this.addFieldInfoShow = false;
  }

  changeSelect(data) {
    this.addFieldInfoShow = true;
  }

  onMainSubmit() {
    window.localStorage.setItem('progress', '50');
    this.router.navigate(['/pages/references']);
  }

  onAddFieldSubmit() {
    this.modalIsVisible = false;
    this.addFieldInfoShow = false;
  }
}
