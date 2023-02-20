import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {BehaviorSubject, Observable, of, tap} from "rxjs";
import {Book} from "../model/book";
import {CartService} from "../service/cart.service";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{

  cartSize$:Observable<number>=this.cartService.cartSize$

  constructor(private cartService:CartService) {
  }

  ngOnInit(): void {
  }



}
