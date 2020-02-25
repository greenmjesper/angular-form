import { Component, OnInit } from '@angular/core';
import { PagesService } from '../pages.service';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent implements OnInit {

  constructor(
    private pagesService: PagesService
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.pagesService.setProgressValue({ value: Number(window.localStorage.getItem('progress')) });
    });
    
  }

}
