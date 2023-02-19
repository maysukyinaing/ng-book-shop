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
  }
]

bootstrapApplication(AppComponent,
  {
    providers:[importProvidersFrom(RouterModule.forRoot(routes)),
               importProvidersFrom(BookService)]
  })
    .catch(err => console.error(err))


