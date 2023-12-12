import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsListService {

  itemsList: any = [
    {
      "id": "1",
      "img": "/assets/Task-Three/pear-orange.jpg",
      "name": "Pear & Orange",
      "time": "20min",
      "rating": "4.8",
      "amount": "25.00$"
    },
    {
      "id": "2",
      "img": "/assets/Task-Three/meat-mashrooms.jpg",
      "name": "Meat & Mashrooms",
      "time": "30min",
      "rating": "5.0",
      "amount": "37.00$"
    },
    {
      "id": "3",
      "img": "/assets/Task-Three/egg-bread.jpg",
      "name": "Eggs & Bread",
      "time": "10min",
      "rating": "4.7",
      "amount": "25.00$"
    },
    {
      "id": "4",
      "img": "/assets/Task-Three/pancake.jpg",
      "name": "Pancake",
      "time": "10min",
      "rating": "4.9",
      "amount": "13.00$"
    },
    {
      "id": "5",
      "img": "/assets/Task-Three/Veg-Biryani.jpg",
      "name": "Veg Biryani",
      "time": "15min",
      "rating": "4.0",
      "amount": "20.00$"
    },
    {
      "id": "6",
      "img": "/assets/Task-Three/Chicken-Biryani.jpg",
      "name": "Chicken Biryani",
      "time": "25min",
      "rating": "4.2",
      "amount": "30.00$"
    },
    {
      "id": "7",
      "img": "/assets/Task-Three/Mutton-Biryani.jpg",
      "name": "Mutton Biryani",
      "time": "30min",
      "rating": "4.2",
      "amount": "32.00$"
    },
    {
      "id": "8",
      "img": "/assets/Task-Three/Prawns-Biryani.jpg",
      "name": "Prawns Biryani",
      "time": "20min",
      "rating": "4.1",
      "amount": "36.00$"
    },
    {
      "id": "9",
      "img": "/assets/Task-Three/Chicken-Chizza.jpg",
      "name": "Chicken Chizza",
      "time": "15min",
      "rating": "3.5",
      "amount": "31.00$"
    },
    {
      "id": "10",
      "img": "/assets/Task-Three/Chicken-Chizza-&-Wings-Meal.jpg",
      "name": "Chicken Chizza & Wings Meal",
      "time": "40min",
      "rating": "4.8",
      "amount": "45.00$"
    },
    {
      "id": "11",
      "img": "/assets/Task-Three/Zinger-Pro-Burger.jpg",
      "name": "Zinger Pro Burger",
      "time": "35min",
      "rating": "3.8",
      "amount": "23.00$"
    },
    {
      "id": "12",
      "img": "/assets/Task-Three/Zinger-Pro-Burger-&-Popcorn-Meal.jpg",
      "name": "Zinger Pro Burger & Popcorn Meal",
      "time": "20min",
      "rating": "3.9",
      "amount": "45.00$"
    },
    {
      "id": "13",
      "img": "/assets/Task-Three/Arisalu-250g.jpg",
      "name": "Arisalu 250g",
      "time": "10min",
      "rating": "3.0",
      "amount": "19.00$"
    },
    {
      "id": "14",
      "img": "/assets/Task-Three/Assorted-Sweets.jpg",
      "name": "Assorted Sweets",
      "time": "15min",
      "rating": "3.9",
      "amount": "20.00$"
    },
    {
      "id": "15",
      "img": "/assets/Task-Three/Bobatlu-5pcs.jpg",
      "name": "Bobatlu 5pcs",
      "time": "25min",
      "rating": "4.5",
      "amount": "25.00$"
    },
    {
      "id": "16",
      "img": "/assets/Task-Three/Dryfruit-Paper-Sweet-1pc-Pootharekulu.jpg",
      "name": "Dryfruit Paper Sweet 1pc Pootharekulu",
      "time": "5min",
      "rating": "4.9",
      "amount": "8.00$"
    },
    {
      "id": "17",
      "img": "/assets/Task-Three/Jaggery-Paper-Sweet-1pc-Pootharekulu.jpg",
      "name": "Jaggery Paper Sweet 1pc Pootharekulu",
      "time": "10min",
      "rating": "4.3",
      "amount": "5.00$"
    },
    {
      "id": "18",
      "img": "/assets/Task-Three/Jaggery-Sunnundalu.jpg",
      "name": "Jaggery Sunnundalu",
      "time": "20min",
      "rating": "4.5",
      "amount": "21.00$"
    },
    {
      "id": "19",
      "img": "/assets/Task-Three/Nuvvula-Laddu.jpg",
      "name": "Nuvvula Laddu",
      "time": "25min",
      "rating": "3.9",
      "amount": "15.00$"
    },
    {
      "id": "20",
      "img": "/assets/Task-Three/Kaju-Sweet-(Bellam-Kaju).jpg",
      "name": "Kaju Sweet (Bellam Kaju)",
      "time": "30min",
      "rating": "1.0",
      "amount": "20.00$"
    },
  ];

  getItem(id: number) {
    return this.itemsList?.filter((e: any) => e.id == id )
  }

}
