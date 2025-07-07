import { Component, OnInit } from '@angular/core';
import { AddBookComponent } from "./add-book/add-book.component";
import { BookNameService } from '../../services/book-name.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-day5',
  standalone: true,
  imports: [AddBookComponent, CommonModule],
  templateUrl: './day5.component.html',
  styleUrl: './day5.component.scss'
})
export class Day5Component implements OnInit {

  books:any[] = [];

  constructor(private bookNameService:BookNameService){}

  ngOnInit(): void {
      this.books = this.bookNameService.getBook();
  }

  
}
