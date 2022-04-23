import { CitizenIdService } from './citizen-id.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-citizen-id',
  templateUrl: './citizen-id.component.html',
  styleUrls: ['./citizen-id.component.scss']
})
export class CitizenIdComponent implements OnInit {

  data: any = {
    citizen_id: null
  }
  constructor(private service: CitizenIdService) { }

  ngOnInit(): void {
  }

  verify() {
    this.service.checkCitizenId(this.data).subscribe(
      {
        next: (response: any) => {
          console.log(response)
          alert(JSON.stringify(response))
          return true;
        },
        error: (error: any) => {
          alert(JSON.stringify(error.error))
          return false;
        }
      }
    );
  }
}
