import { Component, OnInit } from '@angular/core';
import { PagesService } from '../pages.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.css']
})
export class CompletedComponent implements OnInit {

  constructor(
    private pagesService: PagesService,
  ) { }

  ngOnInit() {
    window.localStorage.setItem('progress', '100');
    setTimeout(() => {
      this.pagesService.setProgressValue({ value: 100 });
    });
  }

}
