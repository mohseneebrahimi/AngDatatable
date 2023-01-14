import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient) { }
 searchfn(){

    return this.http.get('http://localhost:8082/selectAll');
  // return this.http.get('http://localhost:8082/helloworld');
 }
}
