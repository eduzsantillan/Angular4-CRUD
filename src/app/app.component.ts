import { Component } from '@angular/core';
import {PostService} from './posts.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PostService]
})
export class AppComponent {
  title : string;
  employees=[
    {name:'Eduardo',position:'Manager',email:'aaa@bb.com'},
    {name:'Ronaldo',position:'Designer',email:'aaa@bb.com'},
    {name:'Messi',position:'Programmer',email:'aaa@bb.com'},
  ];
  model:any={};
  modelToUpdate:any={};
  indexToUpdate;
  msgResult:string;
  hideShowUpdate:boolean;

  constructor() {
    this.title='Angular CRUD';
    this.msgResult='';
    this.hideShowUpdate=true;

  }

  addEmployee():void{
    this.employees.push(this.model);
    this.msgResult='Employee has been created successfully!'
  }

  deleteEmployee(i):void{
    var answer= confirm('Are you sure to delete this employee?');
    //Yes:true
    //No:false

    if(answer){
      this.employees.splice(i,1);
    }

    this.msgResult='Employee has been deleted successfully!';
  
  }

  editEmployee(i):void{
    this.hideShowUpdate=false;
    this.modelToUpdate.name= this.employees[i].name;
    this.modelToUpdate.position= this.employees[i].position;
    this.modelToUpdate.email= this.employees[i].email;
    this.indexToUpdate=i;
  }

  updateEmployee():void{
    let i = this.indexToUpdate;
    this.employees[i]= this.modelToUpdate;
    this.modelToUpdate={};
    this.msgResult='Employee has been updated successfully!'
  }

  closeAlert():void{
    this.msgResult='';
  }

}



