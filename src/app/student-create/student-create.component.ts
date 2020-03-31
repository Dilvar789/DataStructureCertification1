import { Component, OnInit } from '@angular/core';

import {HomeServiceService} from './../home-service.service';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {

  student : {id, name, description, email}={id:null,name: "",description: "",email: ""};
  
  constructor( public homeService: HomeServiceService) { }

ngOnInit() {
}
createStudent(){
  console.log(this.student);
  this.homeService.createStudent(this.student);
  this.student={id: null,name: "",description: "",email: ""};
}

}
