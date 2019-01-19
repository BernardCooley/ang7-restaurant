import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchRestaurantsComponent } from './components/search-restaurants/search-restaurants.component';
import { BookTableComponent } from './components/book-table/book-table.component';
import { RestaurantResultsComponent } from './components/restaurant-results/restaurant-results.component';
import { SearchService } from './services/searchService/search.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchRestaurantsComponent,
    BookTableComponent,
    RestaurantResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
