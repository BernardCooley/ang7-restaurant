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
    restaurantName: new FormControl(''),
    people: new FormControl(''),
    date: new FormControl(''),
    meal: new FormControl('')
  });

  constructor() { }

  searchRestaurants(formData) {
    this.sendFormData.emit(formData);
  }

  ngOnInit() {
  }

}
