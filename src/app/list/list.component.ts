import {Component, Input, OnChanges, OnInit} from '@angular/core';
import { Course, User} from '../types';
import { CourseService} from '../course.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnChanges {


  @Input() searchTerm: String;

  courses: Observable<Course[]>;
  users: Observable<User[]>;

  constructor( private courseService: CourseService) { }

  ngOnInit() {
    // this.courses = this.courseService.getAllCourses(this.searchTerm);
    const data = this.courseService.getCoursesAndUsers(this.searchTerm).subscribe(coursesAndUsers => {
      this.courses = coursesAndUsers.courses;
      this.users = coursesAndUsers.users;
    });
  }

  ngOnChanges() {
    const data = this.courseService.getCoursesAndUsers(this.searchTerm).subscribe(coursesAndUsers => {
      this.courses = coursesAndUsers.courses;
      this.users = coursesAndUsers.users;
    });

  }

}
