import { Component } from '@angular/core';
import { MyServiceService } from '../../service/my-service.service';


@Component({
  selector: 'app-show-vouchers',
  standalone: false,
  templateUrl: './show-vouchers.component.html',
  styleUrl: './show-vouchers.component.css'
})
export class ShowVouchersComponent {

  constructor(private _myser: MyServiceService) { }

  ngOnInit() {
    this.getAllVouchers();
  }

  data: any;
  getAllVouchers()  {
    this._myser.getvouchers().subscribe((data) => {
      this.data = data;
      console.log(this.data);
    });
}

}
