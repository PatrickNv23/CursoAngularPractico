import { Component } from '@angular/core';
import { ICardUser } from '@shared/components/cards/card-user/card-user.metadata';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  public user: ICardUser = {
    name: 'Patrick',
    age: 21,
    description: 'fullstack developer',
    avatar: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Far.pinterest.com%2Fchiniii%2Favatar%2F&psig=AOvVaw0j613bUYgA9krVrYf7hCa7&ust=1672200030643000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNiu59f0mPwCFQAAAAAdAAAAABAE'
  }
}
