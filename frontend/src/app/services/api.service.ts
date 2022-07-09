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


  //  todo get api

  getTodo(): Observable<object> {
    return this.http.get(this.api_link);
  }

  //  todo post api

  postTodo(data: any) {
    return this.http.post(this.api_link, data)
  }

  // todo put api

  putTodo(data:any,id:number){
    return this.http.put(this.api_link+id,data)
  }


  // todo delete api

  deleteTodo(id:number){
    return this.http.delete(this.api_link+id).pipe(
      tap(() => {
        this.refreshRequired.next();
      })
    );
  }

}
