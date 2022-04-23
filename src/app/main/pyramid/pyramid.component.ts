import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pyramid',
  templateUrl: './pyramid.component.html',
  styleUrls: ['./pyramid.component.scss']
})
export class PyramidComponent implements OnInit {

  level: any = 0;
  pyramid: any = [];
  constructor() { }

  ngOnInit(): void {
  }

  createPyramid() {
    this.pyramid = [];

    for (let i = 0; i < (this.level * 2); i++) {
      let nowLevel = '';
      for (let j = 1; j <= (this.level * 2); j++) {
        if (i < this.level) {
          if (j == (this.level - i) || j == (this.level + (i + 1))) {
            nowLevel += `${i + 1}`;
          } else if (j > (this.level - i) && j < (this.level + (i + 1))) {
            nowLevel += '*';
          }
          else {
            nowLevel += '_';
          }
        }
        if (i > this.level) {
          let rerun: any = (this.level * 2) - (i);
          if (j == (this.level - (rerun - 1)) || j == (this.level + rerun)) {
            nowLevel += `${rerun}`;
          } else if (j > (this.level - (rerun - 1)) && j < (this.level + rerun)) {
            nowLevel += '*';
          }
          else {
            nowLevel += '_';
          }
        }
      }
      this.pyramid.push(nowLevel);
    }
  }

}
