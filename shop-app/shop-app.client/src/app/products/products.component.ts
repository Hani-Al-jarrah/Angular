import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShopService } from '../shop-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  standalone: false,
  styleUrls: ['./products.component.css']
})
export class ProductsComponent { 

  categoryId: string = '';
  products: any[] = [];

  constructor(private route: ActivatedRoute, private shopService: ShopService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => { this.categoryId = params.get('id') || '';
      this.getProducts();
    });
  }

  getProducts() {
    this.shopService.getProductsByCategory(this.categoryId).subscribe(
      (data) => {
        this.products = data;
      },
    );
  }
}
