import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-table',
  templateUrl: './book-table.component.html',
  styleUrls: ['./book-table.component.scss']
})
export class BookTableComponent implements OnInit {

  constructor() { }

  getSearchData($event) {
    console.log($event);
    // this.message = $event
  }

  ngOnInit() {
  }

}
