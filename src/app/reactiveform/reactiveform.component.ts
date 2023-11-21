import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.scss']
})
export class ReactiveformComponent implements OnInit {
  responseData:any

  constructor(private fb: FormBuilder, private _dataService: DataService) { }

  formDetails!: FormGroup;
  shouldHide : boolean | undefined 
  


  ngOnInit(): void {
    this.formDetails = this.fb.group({
      name: ['',[Validators.required]],
      email: ['',[Validators.required]],
      gender: ['',[Validators.required]],
    });
  }

  fetchData() {
    this._dataService.getRectiveData().subscribe(
      (response) => {
        this.responseData = response;
      },
      (error) => {
        console.error('Error:', error);
      }
    )
    this.shouldHide = true


  }

  submitForm() {
    this._dataService.reactiveData(this.formDetails.value);
  }

}
