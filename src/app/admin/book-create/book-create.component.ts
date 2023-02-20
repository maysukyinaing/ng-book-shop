import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-book-create',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.scss']
})
export class BookCreateComponent implements OnInit{

  constructor(private fb:FormBuilder) {
  }

  bookForm:FormGroup = this.fb.group({
    title:[''],
    author:['',[Validators.required]],
    price:[0],
    description:[''],
    imageUrl:[''],
    comments:[''],
    publishedDate:[new Date()]
  })

  ngOnInit(): void {
  }

}
