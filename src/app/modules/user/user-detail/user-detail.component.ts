import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { USERS } from '@data/constants/users.const';
import { ICardUser } from '@shared/components/cards/card-user/card-user.metadata';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent {
  public users: ICardUser[] = USERS;
  public id: number;
  //public currentUser: ICardUser;

  constructor(private route: ActivatedRoute) {
    this.id = +this.route.snapshot.params['id'];
    //this.currentUser = this.users.find(user => user.id === this.id);
  }

}
