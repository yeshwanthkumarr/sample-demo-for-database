import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
x = 10;

  constructor(public Http: HttpClient) {

   }

   getData(): Observable<any> {
     return this.Http.get('http://localhost:3000/details');
   }
   obtainValues(value) {
    this.x = value;
   }
   sendData() {
     return this.x;
   }
}
