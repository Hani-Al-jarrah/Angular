import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShopService } from '../shop-service.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  standalone: false,
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  productId: string = '';
  product: any = {};

  constructor(private route: ActivatedRoute, private shopService: ShopService) { }

  ngOnInit() {
      this.productId = this.route.snapshot.paramMap.get('id') || '';

    this.getProduct();
  }
  getProduct() {
    if (this.productId) {
      this.shopService.getProductById(this.productId).subscribe((data) => {
          this.product = data;
        },
      );
    }
  }
}

