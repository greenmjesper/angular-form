import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-tender',
  templateUrl: './new-tender.component.html',
  styleUrls: ['./new-tender.component.css']
})
export class NewTenderComponent implements OnInit {
  newTenderForm: FormGroup;
  @Output() tenderComplete = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
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
    
  }

}
