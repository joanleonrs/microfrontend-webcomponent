import { Component, OnInit } from "@angular/core";
import { Book } from "../../service/Book";
import { EventEmitterService } from "../../service/event.emmiter.service";
import { BookListingService } from "../../service/book-listing.service";

@Component({
  selector: "app-book-listing",
  templateUrl: "./book-listing.component.html",
  styleUrls: ["./book-listing.component.scss"]
})
export class BookListingComponent implements OnInit {

  bookList: Array<Book>;
  searchText: string;

  constructor(
    private bookListingService: BookListingService,
    private eventEmitter: EventEmitterService
  ) {}

  ngOnInit() {
    this.bookListingService.getBookListing().subscribe(data => {
      data.books.map(index => {
        index.rating = Math.floor(Math.random() * 10 + 1);
      });

      this.bookList = data.books;
    });
  }

  addBookToCart(book): void {
    this.eventEmitter.sendMessage(book);
  }
}
