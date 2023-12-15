import { Component } from '@angular/core';

@Component({
  selector: 'app-e-commerce-web',
  templateUrl: './e-commerce-web.component.html',
  styleUrls: ['./e-commerce-web.component.scss']
})
export class ECommerceWebComponent {
  slider: any = [
    {
      "img": "/assets/Task-Four/slider-images/img-1.jpg"
    },
    {
      "img": "/assets/Task-Four/slider-images/img-2.jpg"
    },
    {
      "img": "/assets/Task-Four/slider-images/img-3.jpg"
    },
    {
      "img": "/assets/Task-Four/slider-images/img-4.jpg"
    },
    {
      "img": "/assets/Task-Four/slider-images/img-5.jpg"
    },
    {
      "img": "/assets/Task-Four/slider-images/img-6.jpg"
    },
    {
      "img": "/assets/Task-Four/slider-images/img-7.jpg"
    },
  ];
  topOffers: any = [
    {
      "name": "Top Offers",
      "img": "/assets/Task-Four/item-types/img-1.jpg"
    },
    {
      "name": "Mobiles & Tablets",
      "img": "/assets/Task-Four/item-types/img-2.jpg"
    },
    {
      "name": "Electronics",
      "img": "/assets/Task-Four/item-types/img-3.jpg"
    },
    {
      "name": "TVs & Appliances",
      "img": "/assets/Task-Four/item-types/img-4.jpg"
    },
    {
      "name": "Fashion",
      "img": "/assets/Task-Four/item-types/img-5.jpg"
    },
    {
      "name": "Beauty",
      "img": "/assets/Task-Four/item-types/img-6.jpg"
    },
    {
      "name": "Home & Kitchen",
      "img": "/assets/Task-Four/item-types/img-7.jpg"
    },
    {
      "name": "Furniture",
      "img": "/assets/Task-Four/item-types/img-8.jpg"
    },
    {
      "name": "Flights",
      "img": "/assets/Task-Four/item-types/img-9.jpg"
    },
    {
      "name": "Grocery",
      "img": "/assets/Task-Four/item-types/img-10.jpg"
    },
  ];
  topBrands: any = [
    {
      "img": "/assets/Task-Four/branded-shops/img-1.jpg"
    },
    {
      "img": "/assets/Task-Four/branded-shops/img-2.jpg"
    },
    {
      "img": "/assets/Task-Four/branded-shops/img-3.jpg"
    },
    {
      "img": "/assets/Task-Four/branded-shops/img-4.jpg"
    },
    {
      "img": "/assets/Task-Four/branded-shops/img-5.jpg"
    },
    {
      "img": "/assets/Task-Four/branded-shops/img-6.jpg"
    },
    {
      "img": "/assets/Task-Four/branded-shops/img-7.jpg"
    },
    {
      "img": "/assets/Task-Four/branded-shops/img-8.jpg"
    },
    {
      "img": "/assets/Task-Four/branded-shops/img-9.jpg"
    },
    {
      "img": "/assets/Task-Four/branded-shops/img-10.jpg"
    },
    {
      "img": "/assets/Task-Four/branded-shops/img-11.jpg"
    },
    {
      "img": "/assets/Task-Four/branded-shops/img-12.jpg"
    },
    {
      "img": "/assets/Task-Four/branded-shops/img-13.jpg"
    },
    {
      "img": "/assets/Task-Four/branded-shops/img-14.jpg"
    },
    {
      "img": "/assets/Task-Four/branded-shops/img-15.jpg"
    },
    {
      "img": "/assets/Task-Four/branded-shops/img-16.jpg"
    },
    {
      "img": "/assets/Task-Four/branded-shops/img-17.jpg"
    },
  ];
  todayDeals: any = [
    {
      "img" : "/assets/Task-Four/today-deals/img-1.jpg",
      "offer" : "65",
      "name" : "Best Styles in Footwear"
    },
    {
      "img" : "/assets/Task-Four/today-deals/img-2.jpg",
      "offer" : "68",
      "name" : "Best Deals on Footwear & Handbags"
    },
    {
      "img" : "/assets/Task-Four/today-deals/img-3.jpg",
      "offer" : "79",
      "name" : "Made for Tagore shop - Most Loved Fashion"
    },
    {
      "img" : "/assets/Task-Four/today-deals/img-4.jpg",
      "offer" : "25",
      "name" : "Great Deals on Health and Sports Sup…"
    },
    {
      "img" : "/assets/Task-Four/today-deals/img-5.jpg",
      "offer" : "54",
      "name" : "Cookware, Pots & Pans from Top Brands"
    },
    {
      "img" : "/assets/Task-Four/today-deals/img-6.jpg",
      "offer" : "95",
      "name" : "Travel Adapters And Electronic Access…"
    },
    {
      "img" : "/assets/Task-Four/today-deals/img-7.jpg",
      "offer" : "40",
      "name" : "Deal of The Day for Best Selling Books"
    },
    {
      "img" : "/assets/Task-Four/today-deals/img-8.jpg",
      "offer" : "79",
      "name" : "Made for Tagore shop - Trending Men's Fa…"
    },
    {
      "img" : "/assets/Task-Four/today-deals/img-9.jpg",
      "offer" : "76",
      "name" : "Hidesign, Van Heusen & More Premiu…"
    },
    {
      "img" : "/assets/Task-Four/today-deals/img-10.jpg",
      "offer" : "87",
      "name" : "Wallpapers Starting 149 from wolpin"
    },
  ];
  trendyHomeDecoration: any = [
    {
      "img" : "/assets/Task-Four/trendy-home-decoration/img-1.jpg"
    },
    {
      "img" : "/assets/Task-Four/trendy-home-decoration/img-2.jpg"
    },
    {
      "img" : "/assets/Task-Four/trendy-home-decoration/img-3.jpg"
    },
    {
      "img" : "/assets/Task-Four/trendy-home-decoration/img-4.jpg"
    },
    {
      "img" : "/assets/Task-Four/trendy-home-decoration/img-5.jpg"
    },
    {
      "img" : "/assets/Task-Four/trendy-home-decoration/img-6.jpg"
    },
    {
      "img" : "/assets/Task-Four/trendy-home-decoration/img-7.jpg"
    },
    {
      "img" : "/assets/Task-Four/trendy-home-decoration/img-8.jpg"
    },
    {
      "img" : "/assets/Task-Four/trendy-home-decoration/img-9.jpg"
    },
    {
      "img" : "/assets/Task-Four/trendy-home-decoration/img-10.jpg"
    },
  ]
}
