import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../models/Employee';
import { EmpserviceService } from '../services/empservice.service';
import { from } from 'rxjs';


@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {
  employees : Employee[] = [];
  empid : string;
  empname : string;
  empdept:string;
  email:string;
  emppass:string;
  isUpdate:boolean;

  constructor(
    private empservice:EmpserviceService,
    private router:Router) {

    }

  ngOnInit(): void {
    this.refresh();
    this.reset();
  }
  refresh(){
    this.empservice.getList().then((value)=>{
      if(value.success){
        this.employees = value.data;
      }
    });
  }
  save(){
    let employee={
      employee_id :this.empid,
      employee_name :this.empname,
      department :this.empdept,
      email :this.email,
      password :this.emppass,
      isBlocked:false
    }as Employee;
    this.empservice.save(employee).then((value)=>{
      if(value.success){
        alert("Saved");
        this.refresh();
        this.reset();
      }else{
        alert(value.message);
      }
    })
  }
  reset(){
    this.isUpdate=false;
    this.empid=null;
    this.empname=null;
    this.empdept=null;
    this.email=null;
    this.emppass=null;
  }
  fillAs(employee:Employee){
this.isUpdate=true
this.empid=employee.employee_id;
this.empname=employee.employee_name;
this.empdept=employee.department;
this.email=employee.email;
this.emppass=employee.password;
  }
  delete(employee : Employee){
    this.empservice.delete(employee.employee_id).then((value)=>{
      if(value.success){
        alert("Deleted");
        this.refresh();
      }else{
        alert(value.message);
      }
    })
  }
  view(employee : Employee){
    localStorage.setItem('emp',employee.employee_id);
    this.router.navigateByUrl('/emphome');
  }
  blockunblock(employee : Employee){
    this.empservice.block(employee.employee_id).then((value)=>{
      alert(value.message);
    })
  }
}