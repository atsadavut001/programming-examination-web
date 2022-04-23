import { TriangleService } from './triangle.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-triangle',
  templateUrl: './triangle.component.html',
  styleUrls: ['./triangle.component.scss']
})
export class TriangleComponent implements OnInit {

  data: any = {
    base: null,
    height: null
  };
  area: any = null;
  constructor(private service: TriangleService) { }

  ngOnInit() {
  }

  calculateTriangle() {
    this.service.calculateTriangle(this.data).subscribe(
      {
        next: (response: any) => {
          this.area = response.area;
          return true;
        },
        error: (error: any) => {
          alert(error.error);
          return false;
        }
      }
    );
  }
}
