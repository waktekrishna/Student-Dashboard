import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss']
})
export class TemplateDrivenComponent implements OnInit {

  constructor( private _dataService: DataService) { }

  ngOnInit(): void {
  }
  onSubmit(form: any) {
    this._dataService.templateDrivenData(form.value)
  }

}
