import { Component } from '@angular/core';
import { ShopService } from '../shop-service.service';

@Component({
  selector: 'app-add-category',
  standalone: false,
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent {
  constructor(private _ser: ShopService) { }

  ngOnInit() { }
  AddCato(newcategory: any) {
    return this._ser.Addcategory(newcategory).subscribe(() => {
    }
    )
  }
}
