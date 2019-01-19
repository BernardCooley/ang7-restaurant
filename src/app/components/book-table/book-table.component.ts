import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/searchService/search.service';

@Component({
  selector: 'app-book-table',
  templateUrl: './book-table.component.html',
  styleUrls: ['./book-table.component.scss']
})
export class BookTableComponent implements OnInit {
  bookingData;

  constructor(private _searchService: SearchService) { }

  searchTables($event) {
    this.bookingData = this._searchService.searchRestuarants($event);
  }

  ngOnInit() {
  }

}
