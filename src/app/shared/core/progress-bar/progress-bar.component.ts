import { Component, OnInit, Input } from '@angular/core';

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
        if(this.lastInterval) {
          clearInterval(this.lastInterval);
        }

        this.lastInterval = setInterval(() => {
          this.width += 3;
          if(this.width > 100) {
            this.width = 0;
          }
        }, 50);
      } else {
        this.width = 0;
        clearInterval(this.lastInterval);
        this.lastInterval = null;
      }
    });

  }

}
