import { Injectable } from '@angular/core';
import {BehaviorSubject, from, map, Observable, of, tap} from "rxjs";
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

  removeFromCart(id:number) {
    return from(this.removeById(this.booksCart, id))
      .pipe(
        tap(() => this.cartSubject.next(this.booksCart)),
        tap(() => this.cartSizeSubject.next(this.booksCart?.length))
      )
  }

  private removeById(books:Book[], id:number) {
    const index = books.findIndex(b => b.id == id)
    if(index >= 0) {
      return books.splice(index, 1)
    }
    return []
  }

  clearCart():Observable<any> {
    return from(this.booksCart)
      .pipe(
        map(book => this.booksCart.length = 0),  //if length was 0 in js , all value was deleted instant
        tap(() => this.cartSubject.next(this.booksCart)),
        tap(() => this.cartSizeSubject.next(this.booksCart.length))
      )
  }
}
