import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http:HttpClient ) { }

  // get api

  getToday():Observable<object>{
    return this.http.get('http://localhost:3000/today/');
  }

  getWeek():Observable<object>{
    return this.http.get('http://localhost:3000/week/');
  }

  getMonth():Observable<object>{
    return this.http.get('http://localhost:3000/month/');
  }
  
  // post api

  postToday(data:any){
    return this.http.post('http://localhost:3000/today/',data);
  }

  postWeek(data:any){
    return this.http.post('http://localhost:3000/week/',data);
  }

  postMonth(data:any){
    return this.http.post('http://localhost:3000/month/',data);
  }

  // put api

  putToday(id:number,data:any){
    return this.http.put('http://localhost:3000/today/'+id,data);
  }

  putWeek(id:number,data:any){
    return this.http.put('http://localhost:3000/week/'+id,data);
  }

  putMonth(id:number,data:any){
    return this.http.put('http://localhost:3000/month/'+id,data);
  }

}
