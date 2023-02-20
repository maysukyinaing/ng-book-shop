import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBuilder} from "@angular/forms";
import {BookService} from "../../core/service/book.service";
import {ActivatedRoute, Router, RouterModule} from "@angular/router";

@Component({
  selector: 'app-book-update',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './book-update.component.html',
  styleUrls: ['./book-update.component.scss']
})
export class BookUpdateComponent implements OnInit{

  constructor(private fb:FormBuilder, private bookService:BookService,
              private router:Router, private route:ActivatedRoute) {
  }

  ngOnInit(): void {
  }

}
