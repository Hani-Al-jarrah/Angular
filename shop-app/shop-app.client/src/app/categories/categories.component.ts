import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShopService } from '../shop-service.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  standalone: false,
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: any[] = [];

  constructor(private shopService: ShopService, private router: Router) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.shopService.getCategories().subscribe( (data) => {
        this.categories = data;
      },
    );
  }
}
