import { Component } from '@angular/core';
import { MyServiceService } from '../../service/my-service.service';

@Component({
  selector: 'app-add-vouchers',
  standalone: false,
  templateUrl: './add-vouchers.component.html',
  styleUrl: './add-vouchers.component.css'
})
export class AddVouchersComponent {
  constructor(private _myser: MyServiceService) { }

  ngOnInit() {

  }

  addVoucher(data: any) {
    this._myser.addvoucher(data).subscribe(() => {
      alert("added voucher")
    })
  }

}
