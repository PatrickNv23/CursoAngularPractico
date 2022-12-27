import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { USERS } from '@data/constants/users.const';
import { UserService } from '@data/services/api/user.service';
import { ICardUser } from '@shared/components/cards/card-user/card-user.metadata';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent {
  public users: ICardUser[] = USERS;
  public id: number;
  public currentUser: ICardUser;

  constructor(private route: ActivatedRoute, private userService: UserService) {
    this.id = +this.route.snapshot.params['id'];
    //this.currentUser = this.users.find(user => user.id === this.id);
  }

  ngOnInit() {
    this.currentUser = this.userService.getUserById(this.id).subscribe(r => {
      if (!r.error) {
        this.currentUser = r.data;
      }

    })
  }
}
