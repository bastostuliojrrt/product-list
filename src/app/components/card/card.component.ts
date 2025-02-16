import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  showProductListCards: boolean = true;
  ativo: boolean = false;
  products: any[] = [

    {
      productName: 'Acabaxi',
      productCategory: 'https://cdn-icons-png.flaticon.com/512/272/272169.png',
      productPrice: 5.50,
      productQuantity: 500
    },
    {
      productName: 'Banana',
      productCategory: 'https://cdn-icons-png.flaticon.com/512/272/272169.png',
      productPrice: 3.50,
      productQuantity: 500
    },
    {
      productName: 'Batata',
      productCategory: 'https://icons.veryicon.com/png/o/commerce-shopping/taofen-bar-category-icon-library/fresh-vegetables.png',
      productPrice: 2.50,
      productQuantity: 500
    },
    {
      productName: 'Cebola',
      productCategory: 'https://icons.veryicon.com/png/o/commerce-shopping/taofen-bar-category-icon-library/fresh-vegetables.png',
      productPrice: 4.99,
      productQuantity: 500
    }


  ]

}
