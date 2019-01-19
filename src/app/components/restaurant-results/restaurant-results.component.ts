import { Component, OnInit, Input } from '@angular/core';
import { SearchService } from '../../services/searchService/search.service';

@Component({
  selector: 'app-restaurant-results',
  templateUrl: './restaurant-results.component.html',
  styleUrls: ['./restaurant-results.component.scss']
})
export class RestaurantResultsComponent implements OnInit {

  @Input() bookingData: Array<any> = [];
  bookingName: string = '';

  constructor(private _searchService: SearchService) {}

  makeBooking() {
    this.bookingData['bookingName'] = this.bookingName;

    this._searchService.makeBooking(this.bookingData);
  }

  ngOnInit() {
  }

}
