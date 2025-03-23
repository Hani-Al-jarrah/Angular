import { Component } from '@angular/core';
import { MyServiceService } from '../../service/my-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-vouchers',
  standalone: false,
  templateUrl: './edit-vouchers.component.html',
  styleUrl: './edit-vouchers.component.css'
})
export class EditVouchersComponent {
  constructor(private _myser: MyServiceService, private _active: ActivatedRoute, private _route: Router) { }

  voucherId: any
  dataVoucher: any
  ngOnInit() {
    this.voucherId = this._active.snapshot.paramMap.get("id")
    this._myser.getVoucherById(this.voucherId).subscribe((data) => {
      this.dataVoucher = data
    })

  }



  editVoucher(data: any) {
    this.voucherId = this._active.snapshot.paramMap.get("id")
    this._myser.editvoucher(this.voucherId, data).subscribe(() => {
      alert("update successfully")
      this._route.navigate(["/Dashboard/editVoucher"])
    })
  }
}
