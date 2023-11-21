import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = 'http://localhost:5000/users/add';

  constructor(private http: HttpClient) { }

  reactiveData(formData: any) {
    console.log("Before request:", formData);
    return this.http.post(this.apiUrl, formData).subscribe();
  }

  getRectiveData() {
    return this.http.get('http://localhost:5000/users')
  }
  

  templateDrivenData(data:any) {
    console.log("Template data", data);
    return this.http.post(this.apiUrl, data).subscribe();
  }

}
