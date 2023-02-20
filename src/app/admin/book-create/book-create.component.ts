import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {Book} from "../../core/model/book";
import {BookService} from "../../core/service/book.service";
import {Router, RouterModule} from "@angular/router";

@Component({
  selector: 'app-book-create',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule,RouterModule],
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.scss']
})
export class BookCreateComponent implements OnInit{

  constructor(private fb:FormBuilder, private bookService: BookService, private router: Router) {
  }

  bookForm:FormGroup = this.fb.group({
    title:[''],
    author:['',[Validators.required,Validators.minLength(3)]],
    price:[0],
    description:[''],
    imageUrl:[''],
    comments:[''],
    publishedDate:[new Date()]
  })

  ngOnInit(): void {
  }

  createBook() {
    const comments = new Array<string>()
    let commentsData = this.bookForm.controls['comments'].value
    comments.push(...commentsData.split(","))

    const book = new Book(
      this.bookForm.controls['title'].value,
      this.bookForm.controls['author'].value,
      this.bookForm.controls['price'].value,
      this.bookForm.controls['description'].value,
      this.bookForm.controls['imageUrl'].value,
      comments,
      this.bookForm.controls['publishedDate'].value
    )
    this.bookService.createBook(book)
      .subscribe(
        data => console.log(data),
        error => console.log(error),
        () => this.router.navigate(['/'])
      )
  }

}
