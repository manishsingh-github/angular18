import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

interface Students{
  name:string,
  Age:string
}

@Component({
  selector: 'app-day2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './day2.component.html',
  styleUrl: './day2.component.scss'
})

export class Day2Component implements OnInit {
  students:Students[] = [];

  ngOnInit(): void {
      this.students=[
        {name:'Manish kumar singh', Age:'48'},
        {name:'Rajnish kumar singh', Age:'42'},
        {name:'Iisha kumari', Age:'39'},
        {name:'Abhiraj Singh', Age:'12'},
        {name:'Santosh Kumar Singh', Age:'45'},
        {name:'Seema kumari singh', Age:'40'}
      ]
  }

  deleteStudent=(index:number):void=>{
    // debugger;
    console.log("Before delete", this.students);
    this.students.splice(index, 1);
    console.log("After delete", this.students);
  }

}
