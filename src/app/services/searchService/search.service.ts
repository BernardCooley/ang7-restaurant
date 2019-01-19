import { Injectable } from '@angular/core';
import { restaurantData } from '../../data/restaurantData'

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() { }

  getRestaurants() {
    return restaurantData;
  }

  searchRestuarants(queryData) {
    let availableTable: String;

    restaurantData.filter(restaurant => {
      return restaurant.restaurantName === queryData.restaurantName;
    }).map(restaurants => {
      restaurants.tables.filter(table => {
        return table.size === queryData.people
      }).map(table => {
        table.bookings.map(booking => {
          availableTable = booking[queryData.meal] === false ? table.name : null;
        })
      })
    })

    return availableTable ? {query: queryData, table: availableTable} : null;
  }

  makeBooking(bookingData) {
    restaurantData.filter(restaurant => 
      restaurant.restaurantName === bookingData.query.restaurantName
    ).map(restaurant => {
      restaurant.tables.filter(table => 
        table.name === bookingData.table
      ).map(table => {
        table.bookings.map(booking => {
          booking[bookingData.query.meal] = [
            {
              bookingName: bookingData.bookingName
            }
          ]
        })
      })
    })

    console.log(restaurantData);
  }
}
