import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PagesService } from '../pages.service';

@Component({
  selector: 'app-new-tender',
  templateUrl: './new-tender.component.html',
  styleUrls: ['./new-tender.component.css']
})
export class NewTenderComponent implements OnInit {
  newTenderForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private pagesService: PagesService
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.pagesService.setProgressValue({ value: 0 });
    });
    this.newTenderForm = this.formBuilder.group({
      Name: [''],
      Description: [''],
      Category: [''],
      BuyOption: [''],
      Purchase: [''],
      PurchaseValue: [''],
      TenderForm: [''],
      Importance: [0],
    });
  }

  onSubmit() {
    this.router.navigate(['/pages/create-form']);
  }

}
