import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-restaurants',
  templateUrl: './search-restaurants.component.html',
  styleUrls: ['./search-restaurants.component.scss']
})
export class SearchRestaurantsComponent implements OnInit {
  @Output() sendFormData = new EventEmitter<string>();

  restaurantBooking = new FormGroup({
    restaurant: new FormControl(''),
    people: new FormControl(''),
    date: new FormControl(''),
    time: new FormControl('')
  });

  constructor() { }

  searchRestaurants(formData) {
    this.sendFormData.emit(formData);
  }

  ngOnInit() {
  }

}
