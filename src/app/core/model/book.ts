export class Book {

  id?:number;
  title?:string;
  author?:string;
  price?:number;
  description?:string;
  imageUrl?:string;
  comments?:string[];
  publishedDate?:Date;

  constructor(title?: string, author?: string, price?: number, description?: string, imageUrl?: string, comments?: string[], publishedDate?: Date, id?: number) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.price = price;
    this.description = description;
    this.imageUrl = imageUrl;
    this.comments = comments;
    this.publishedDate = publishedDate
  }

}
