import { Component, OnInit } from '@angular/core';
import { HomeServiceService } from '../home-service.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  student ;
   students;
   selectedStudent;

  constructor(public homeService: HomeServiceService) { 
    
  }

  ngOnInit() {
    this.students=[
      {id:101,name:"Dilvar",description:"Dilvar Details",email:"dilvar@gmail.com"},
      {id:201,name:"Singh",description:"Singh Details",email:"singh@gmail.com"},
      {id:301,name:"Sam",description:"Sam Details",email:"sam@gmail.com"},
      {id:401,name:"Jony",description:"Jony Details",email:"jony@gmail.com"}
    ];
  }  
   public selectStudent(student){
     this.selectedStudent= student;
   }

}
