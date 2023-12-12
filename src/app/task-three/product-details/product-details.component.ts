import { Component } from '@angular/core';
import { ProductsListService } from '../products-list.service';
import { ActivatedRoute, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  productData: any;
  itemsList: any = [];
  filteredItems: any = [];

  constructor(private productsList: ProductsListService, private activatedRoute: ActivatedRoute, private productsListService: ProductsListService) {
    this.itemsList = this.productsList;
    this.filteredItems = this.itemsList?.itemsList;

    const id = this.activatedRoute?.snapshot?.url[1]?.path;
    this.productData = this.productsListService.getItem(Number(id))[0];
  }

  searchFilter(data: any) {
    if (data?.inputValue!) { this.filteredItems = this.itemsList; }
    this.filteredItems = this.itemsList.filter((e: any) => e?.name.toLowerCase().includes(data?.toLowerCase()));
  }

}
