import {bootstrapApplication} from "@angular/platform-browser";
import {AppComponent} from "./app/app.component";
import {BookService} from "./app/core/service/book.service";
import {importProvidersFrom} from "@angular/core";
import {RouterModule} from "@angular/router";

const routes = [

  {
    path:'',
    loadComponent: () => import('./app/core/book-list/book-list.component')
      .then(c => c.BookListComponent)
  },
  {
    path: 'book/:id',
    loadComponent: () => import('./app/core/book-details/book-details.component')
      .then(c => c.BookDetailsComponent)
  },
  {
    path: 'cartview',
    loadComponent: () => import('./app/core/cart-view/cart-view.component')
      .then(c => c.CartViewComponent)
  },
  {
    path: 'book-create',
    loadComponent: () => import('./app/admin/book-create/book-create.component')
      .then(c => c.BookCreateComponent)
  }
]

bootstrapApplication(AppComponent,
  {
    providers:[importProvidersFrom(RouterModule.forRoot(routes)),
               importProvidersFrom(BookService)]
  })
    .catch(err => console.error(err))


