import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http:HttpClient ) { }

  getToday():Observable<object>{
    return this.http.get('http://localhost:3000/today/');
  }

  getWeek():Observable<object>{
    return this.http.get('http://localhost:3000/week/');
  }

  getMonth():Observable<object>{
    return this.http.get('http://localhost:3000/month/');
  }

  
}
