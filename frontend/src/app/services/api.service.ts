import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  api_link = 'http://localhost:3000/todo/';


  private _refreshrequired = new Subject<void>();

  get refreshRequired() {
    return this._refreshrequired;
  }

  // get api

  getToday(): Observable<object> {
    return this.http.get('http://localhost:3000/today/');
  }

  getWeek(): Observable<object> {
    return this.http.get('http://localhost:3000/week/');
  }

  getMonth(): Observable<object> {
    return this.http.get('http://localhost:3000/month/');
  }



  // post api

  postToday(data: any) {
    return this.http.post('http://localhost:3000/today/', data).pipe(
      tap(() => {
        this.refreshRequired.next();
      })
    );
  }

  postWeek(data: any) {
    return this.http.post('http://localhost:3000/week/', data).pipe(
      tap(() => {
        this.refreshRequired.next();
      })
    );
  }

  postMonth(data: any) {
    return this.http.post('http://localhost:3000/month/', data).pipe(
      tap(() => {
        this.refreshRequired.next();
      })
    );
  }



  // put api

  putToday(id: number, data: any) {
    return this.http.put('http://localhost:3000/today/' + id, data);
  }

  putWeek(id: number, data: any) {
    return this.http.put('http://localhost:3000/week/' + id, data);
  }

  putMonth(id: number, data: any) {
    return this.http.put('http://localhost:3000/month/' + id, data);
  }



  // delete api

  deleteToday(id: number) {
    return this.http.delete('http://localhost:3000/today/' + id).pipe(
      tap(() => {
        this.refreshRequired.next();
      })
    );
  }

  deleteWeek(id: number) {
    return this.http.delete('http://localhost:3000/week/' + id).pipe(
      tap(() => {
        this.refreshRequired.next();
      })
    );
  }

  deleteMonth(id: number) {
    return this.http.delete('http://localhost:3000/month/' + id).pipe(
      tap(() => {
        this.refreshRequired.next();
      })
    );
  }


  //  todo get api

  getTodo(): Observable<object> {
    return this.http.get(this.api_link);
  }

  //  todo post api

  postTodo(data: any) {
    return this.http.post(this.api_link, data)
  }

}
