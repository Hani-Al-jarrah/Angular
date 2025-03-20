import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MyServiceService } from '../service/my-service.service';

@Component({
  selector: 'app-edit-profile',
  standalone: false,
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.css'
})
export class EditProfileComponent {
  @Input() user: any;

  @Output() userUpdated = new EventEmitter<any>();
  constructor(private _ser: MyServiceService) { }

  userId: any;
  savaChanges() {
   
      this.userUpdated.emit(this.user);
   
  }


  //updateUser

}
