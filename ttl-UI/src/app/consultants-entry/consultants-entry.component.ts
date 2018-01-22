///<reference path="../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import { Component, OnInit } from '@angular/core';
import {ConsultantsService} from './consultants-service';
import {Consultant} from '../../shared/consultants';

@Component({
  selector: 'app-consultants-entry',
  templateUrl: './consultants-entry.component.html',
  styleUrls: ['./consultants-entry.component.css'],
  providers: [ConsultantsService]
})
export class ConsultantsEntryComponent implements OnInit {
  consultants: Consultant[] = [];
  message = '';
  constructor(private consultantsService: ConsultantsService ) { }

  ngOnInit() {
    this.consultantsService.getConsultants()
      .then(consultants => this.consultants = consultants);
    console.log('message changed to ', this.message);
  }

  onKey(event: any) { // without type info
    this.message = event.target.value;
  }

  onClickMe() {
    if (this.message == '') {
      this.consultantsService.getConsultants()
        .then(consultants => this.consultants = consultants);
    } else {
      this.consultantsService.searchConsultants(this.message).then(consultants => this.consultants = consultants);
    }
  }
}
