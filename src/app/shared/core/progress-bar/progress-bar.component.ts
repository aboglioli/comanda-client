import { Component, OnInit } from '@angular/core';

import { LoadingService } from '../../services';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {
  width = 0;

  private lastInterval;

  constructor(private loadingService: LoadingService) { }

  ngOnInit() {
    this.loadingService.onLoader().subscribe(show => {
      if(show) {
        this.lastInterval = setInterval(() => {
          this.width += 3;
          if(this.width > 100) {
            this.width = 0;
          }
        }, 50);
      } else {
        clearInterval(this.lastInterval);
      }
    });

  }

}
