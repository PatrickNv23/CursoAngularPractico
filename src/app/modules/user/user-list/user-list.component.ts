import { Component } from '@angular/core';
import { USERS } from '@data/constants/users.const';
import { UserService } from '@data/services/api/user.service';
import { ICardUser } from '@shared/components/cards/card-user/card-user.metadata';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  public users: ICardUser[];

  constructor(private userService: UserService) {
    this.userService.getAllUsers().subscribe(r => {
      if (!r.error) {
        this.users = r.data;
      }
    })
  }
}
