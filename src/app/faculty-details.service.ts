import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FacultyDetailsService {

  constructor(private http: HttpClient) { }
  get_faculty_details(): Observable<any> {
    let path = './assets/facultyDetails.json'
    return this.http.get(path)
  }
}
