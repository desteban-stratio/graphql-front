import {Observable} from 'rxjs';

export type Course = {
  id: string;
  title: string;
  author: string;
  description: string;
  topic: string;
  url: string;
  voteCount: number;
};

export type User = {
  id: string;
  name: string;
  age: number;
};

export type Query = {
  allCourses: Course[];
};

export type QueryTwo = {
  courses: Observable<Course[]>;
  users:  Observable<User[]>;
};
