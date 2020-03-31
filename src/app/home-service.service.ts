import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {
  students = [
    {id:101, name: "Dilvar", description: "Dilvar Details", email:"dilvar@gmail.com"},
    {id:201, name:"Ana", description: "Ana Details",email:"ana@gmail.com"},
    {id:301,name:"Sara",description:"Sara Details",email:"sara@gmail.com"},
    {id:401,name:"Jon",description:"Jon Details",email:"jon@gmail.com"}
  ]

  constructor() { }

  public getStudents(): Array<{id, name, description, email}>
  {
    return this.students;
  }
  public createStudent(students : {id, name, description, email}){
    this.students.push(students);
  }
}
