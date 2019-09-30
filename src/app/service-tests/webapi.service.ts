import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebapiService {
  URL = 'https://jsonplaceholder.typicode.com/todos/';
  constructor(private http: HttpClient) {}

  //   {
  //   "userId": 1,
  //   "id": 1,
  //   "title": "delectus aut autem",
  //   "completed": false
  // }
  getAllTodos() {
    // we don't call subscribe, the caller should control this!
    return this.http.get(this.URL);
  }
}
