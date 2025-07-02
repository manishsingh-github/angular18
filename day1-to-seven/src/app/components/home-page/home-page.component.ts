import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit {

  response:Date | undefined = new Date();
  userName:string='';
  greetings:string='';

  ngOnInit(): void {

  }

  showMessage(name:any){
    this.userName=name;
    const hours=this.response?.getHours() ?? -1;
    if(hours <12){
      this.greetings ="Good morning";
    }
    else if(hours <=18){
      this.greetings="Good afternoon";
    }
    else{
      this.greetings="Good night"
    }
  }


  
}
