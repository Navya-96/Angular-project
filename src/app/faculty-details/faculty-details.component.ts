import { Component, OnInit } from '@angular/core';
import { FacultyDetailsService } from '../faculty-details.service';

@Component({
  selector: 'app-faculty-details',
  templateUrl: './faculty-details.component.html',
  styleUrls: ['./faculty-details.component.css']
})
export class FacultyDetailsComponent implements OnInit {
  faculty_details = [];
  terms = [];
  faculty_name_list = [];
  academic_year = [];
  sections = [];
  constructor(private Service: FacultyDetailsService) { }

  ngOnInit() {
    this.Service.get_faculty_details().subscribe(data => {
      this.faculty_details = data
      for (let i of this.faculty_details) {
        this.terms.indexOf(i['terms']) === -1 ? this.terms.push(i['terms']) : console.log("This item already exists");
        this.faculty_name_list.indexOf(i['facultyName']) === -1 ? this.faculty_name_list.push(i['facultyName']) : console.log("This item already exists");
        this.academic_year.indexOf(i['year']) === -1 ? this.academic_year.push(i['year']) : console.log("This item already exists");
        this.sections.indexOf(i['section']) === -1 ? this.sections.push(i['section']) : console.log("already exist");
      }
    });

  }

}
