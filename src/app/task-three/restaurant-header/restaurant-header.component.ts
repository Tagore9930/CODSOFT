import { Component } from '@angular/core';

@Component({
  selector: 'app-restaurant-header',
  templateUrl: './restaurant-header.component.html',
  styleUrls: ['./restaurant-header.component.scss']
})
export class RestaurantHeaderComponent {
  list: any = [
    {
      "icon" : "view_module",
      "name" : "Menu"
    },
    {
      "icon" : "favorite_border",
      "name" : "Favorites"
    },
    {
      "icon" : "list_alt",
      "name" : "List"
    },
    {
      "icon" : "person_outline",
      "name" : "Profile"
    },
    {
      "icon" : "shopping_cart",
      "name" : "Cart"
    },
  ] 
  headerTwo: any = false;
}
