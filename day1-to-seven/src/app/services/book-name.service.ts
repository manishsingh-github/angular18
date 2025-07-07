import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookNameService {

  constructor() { }
  private books:any[] = ['Angular Fundamental', 'React Fundamantal', 'Node JS Fundamantal'];

  getBook():any[] {
    return this.books;
  }

  addbook(book:any):void{
    console.log("Before adding book" + this.books);
    this.books.push(book);
    console.log("After adding book" + this.books);
  }
  
}
