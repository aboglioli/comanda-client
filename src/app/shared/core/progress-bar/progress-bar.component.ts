import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {
  width = 0;

  constructor() { }

  ngOnInit() {
    setInterval(() => {
      this.width += 3;
      if(this.width > 100) {
        this.width = 0;
      }
    }, 50);
  }

}
