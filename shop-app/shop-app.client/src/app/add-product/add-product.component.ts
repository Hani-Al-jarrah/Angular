import { Component } from '@angular/core';
import { ShopService } from '../shop-service.service';

@Component({
  selector: 'app-add-product',
  standalone: false,
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {

  constructor(private _ser: ShopService) { }
  categories: any[] = [];
  ngOnInit() {
    this.GetAllCategories()
  }

  AddProd(newproduct: any) {
    return this._ser.Addproduct(newproduct).subscribe(() => {
    }
    )
  }


  GetAllCategories() {
    this._ser.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }
}
