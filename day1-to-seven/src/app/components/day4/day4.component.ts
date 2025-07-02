import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-day4',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './day4.component.html',
  styleUrl: './day4.component.scss'
})
export class Day4Component {

  userName:string='';
  userAge:string='';
  cityname:string='';

}
