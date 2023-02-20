import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Observable} from "rxjs";
import {Book} from "../model/book";
import {CartService} from "../service/cart.service";

@Component({
  selector: 'app-cart-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.scss']
})
export class CartViewComponent implements OnInit{
  carts$:Observable<Book[]> = this.cartService.carts$

  constructor(private cartService:CartService) {
  }

  ngOnInit(): void {
  }


}
