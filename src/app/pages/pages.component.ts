import { Component, OnInit, OnDestroy } from '@angular/core';
import { PagesService } from './pages.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit, OnDestroy {
  progress = 0;
  pagesServiceSubscription: Subscription;

  constructor(
    private pagesService: PagesService
  ) { }

  ngOnInit() {
    this.pagesService.progressSubject.subscribe(
      res => {
        if (res) {
          this.progress = res.value;
        }
      }
    )
  }

  ngOnDestroy() {
    if (this.pagesServiceSubscription) {
      this.pagesServiceSubscription.unsubscribe();
    }
  }

}
