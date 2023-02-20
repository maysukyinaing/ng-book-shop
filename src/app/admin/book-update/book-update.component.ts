import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {BookService} from "../../core/service/book.service";
import {ActivatedRoute, Router, RouterModule} from "@angular/router";
import {Book} from "../../core/model/book";
import {Observable} from "rxjs";

@Component({
  selector: 'app-book-update',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './book-update.component.html',
  styleUrls: ['./book-update.component.scss']
})
export class BookUpdateComponent implements OnInit{

  book!:Book
  updateForm!: FormGroup

  constructor(private fb:FormBuilder, private bookService:BookService,
              private router:Router, private route:ActivatedRoute) {
  }

  ngOnInit(): void {
    let id=parseInt(this.route.snapshot.paramMap.get("id") as string)

    this.bookService.findBookById(id)
      .subscribe(
        data => {
          this.book = data
          this.updateForm = this.fb.group({
              title:[this.book?.title],
              author:[this.book?.author],
              price:[this.book?.price],
              description:[this.book?.description],
              imageUrl:[this.book?.imageUrl],
              comments:[this.book?.comments],
              publishedDate:[this.book?.publishedDate]
              }
          )
        }
      );
  }

  updateBook() {

  }

}
