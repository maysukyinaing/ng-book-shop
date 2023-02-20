import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {BookService} from "../../core/service/book.service";
import {Observable} from "rxjs";
import {Book} from "../../core/model/book";

@Component({
  selector: 'app-all-books',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.scss']
})
export class AllBooksComponent implements OnInit{

  books$:Observable<Book[]> = this.bookService.books$

  constructor(private bookService:BookService) {
  }

  ngOnInit(): void {
  }















}
