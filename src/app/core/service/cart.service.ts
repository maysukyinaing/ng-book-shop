import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of, retry, tap} from "rxjs";
import {Book} from "../model/book";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartSubject:BehaviorSubject<Book[]> = new BehaviorSubject<Book[]>([])
  carts$:Observable<Book[]> =this.cartSubject.asObservable();

  private cartSizeSubject:BehaviorSubject<number>=new BehaviorSubject<number>(0)
  cartSize$:Observable<number>=this.cartSizeSubject.asObservable();

  booksCart:Book[]=[]

  constructor() {
  }

  addToCart(book:Book):Observable<Book> {
    if(!this.bookDuplicate(book)){
      this.booksCart.push(book)
    }
    return of<Book>(book)
      .pipe(
        tap( () => this.cartSubject.next(this.booksCart)),
        tap(() => this.cartSizeSubject.next(this.booksCart.length))  //emit last value
      )
  }

  bookDuplicate(book:Book):boolean {
    let isDuplicate=false
    this.booksCart.forEach(value => {
      if(value?.id == book.id) {
        isDuplicate=true
      }
    })
    return isDuplicate
  }
}
