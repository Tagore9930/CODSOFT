import { Component } from '@angular/core';
import { ProductsListService } from '../products-list.service';


@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent {
  inputValue = '';
  itemsList: any = [];
  filteredItems: any = [];

  constructor(private productsList: ProductsListService) {
    this.itemsList = this.productsList?.itemsList;
    this.filteredItems = this.itemsList;
  }

  searchFilter(data: any) {
    if (data?.inputValue!) { this.filteredItems = this.itemsList; }
    this.filteredItems = this.itemsList.filter((e: any) => e?.name.toLowerCase().includes(data?.toLowerCase()));
  }
}
