import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {BookListComponent} from "./core/book-list/book-list.component";
import {BookService} from "./core/service/book.service";
import {HttpClientModule} from "@angular/common/http";
import {NavbarComponent} from "./core/navbar/navbar.component";
import {SidebarComponent} from "./core/sidebar/sidebar.component";
import {HeaderComponent} from "./core/header/header.component";
import {BookDetailsComponent} from "./core/book-details/book-details.component";
import {CartComponent} from "./core/cart/cart.component";

@Component({
  selector: 'app-root',
  imports:[
    AppComponent, CommonModule, RouterModule, HttpClientModule, BookListComponent,
    NavbarComponent, SidebarComponent, HeaderComponent, BookDetailsComponent,
    CartComponent
  ],
  providers: [BookService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true
})
export class AppComponent {
  title = 'ng-book-shop';
}
