import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http:HttpClient ) { }

  getToday(){
    return this.http.get('http://localhost:3000/today/');
  }

  getWeek(){
    return this.http.get('http://localhost:3000/week/');
  }

  getMonth(){
    return this.http.get('http://localhost:3000/month/');
  }
}
