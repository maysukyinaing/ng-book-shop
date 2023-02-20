import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Observable} from "rxjs";
import {Book} from "../model/book";
import {ActivatedRoute, Router} from "@angular/router";
import {BookService} from "../service/book.service";
import {CartService} from "../service/cart.service";

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit{

  book$!:Observable<Book>
  id!:number;
  constructor(private route: ActivatedRoute, private router: Router, private bookService: BookService,private cartService: CartService) {

  }

  ngOnInit(): void {
    this.id=parseInt(this.route.snapshot.paramMap.get('id') as string)
    this.book$=this.bookService.findBookById(this.id);
  }

  addToCart(book:Book) {
    this.cartService.addToCart(book)
      .subscribe();
  }

  goHome() {
    this.router.navigate(['/'])
  }

  cartView() {
    this.router.navigate(['/cartview'])
  }

}
