import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-day3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './day3.component.html',
  styleUrl: './day3.component.scss'
})
export class Day3Component {
isVisible:boolean=true;
  showhide(){    
    this.isVisible=!this.isVisible;
    console.log('Containt is now', this.isVisible? 'Visible':'Hidden');
  }
}
