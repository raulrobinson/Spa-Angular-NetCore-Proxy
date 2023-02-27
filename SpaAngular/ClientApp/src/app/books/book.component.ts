import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-book-data',
  templateUrl: './book.component.html'
})
export class BookComponent {
  public books: Books[] = [];

  // constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
  //   http.get<Books[]>(baseUrl + 'apigw/telefonica/v1/agile-solution-traceability/test-mock').subscribe(result => {
  //     //this.books = result;
  //     this.books = Object.values(result);
  //     console.log(result);
  //   }, error => console.error(error));
  // }

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Books[]>(baseUrl + 'api/v1/books/id?id=2').subscribe(result => {
      this.books = result;
      //this.books = Object.values(result);
      console.log(result);
    }, error => console.error(error));
  }
}

interface Books {
  code: bigint;
  data: object;
  id: bigint;
  codebook: bigint;
  title: string;
  description: string;
  published: boolean;
}
