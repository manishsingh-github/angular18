import { Component, OnInit } from '@angular/core';
import { BookNameService } from '../../../services/book-name.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'st-add-book',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.scss'
})
export class AddBookComponent implements OnInit {

  newBook:any;

  constructor(private bookNameService:BookNameService){}

ngOnInit(): void {
    // this.newBook = this.bookNameService.addbook;
    this.newBook = '';
}
  addbook(){
    if(this.newBook.trim()){
      this.bookNameService.addbook(this.newBook);
      this.newBook='';
    }
  }
}
