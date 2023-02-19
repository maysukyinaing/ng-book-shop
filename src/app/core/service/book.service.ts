import { Injectable } from '@angular/core';
import {BehaviorSubject, catchError, map, Observable, shareReplay, tap, throwError} from "rxjs";
import {Book} from "../model/book";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class BookService {

  private bookSubject:BehaviorSubject<Book[]> = new BehaviorSubject<Book[]>([])
  books$=this.bookSubject.asObservable()

  constructor(private http:HttpClient) {
    this.loadAllBooks();
  }

  private loadAllBooks() {
     const header = new HttpHeaders();
     header.set("Content-Type", "application/json")
     this.http.get<Book[]>("http://localhost:8080/api/books",{headers:header})
               .pipe(
                 shareReplay(),
                 catchError(err => {
                   return throwError(err);
                 }),
                 tap(book => this.bookSubject.next(book))
               ).subscribe();
  }

  private findBookById(id:number):Observable<Book> {
      return this.books$
                  .pipe(
                    map(books => books.find(book => book.id === id))
                  )as Observable<Book>
  }

}
