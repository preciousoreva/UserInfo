import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  user: User = {
    firstName: '',
    lastName: '',
    email: ''
  };
  users: User[];
  enableAdd = true;
  currentClasses = {};
  showUserForm = false;
  constructor() { }

  ngOnInit() {
    this.users = [
      {
        firstName: 'Precious',
        lastName: 'Akporeha',
        email: 'precious@gmail.com',
        isActive: true,
        registered: new Date('01/02/2018 08:30:00'),
        hide: true
      },
      {
        firstName: 'Vera',
        lastName: 'Armani',
        email: 'vera@gmail.com',
        isActive: false,
        registered: new Date('03/05/2017 09:30:00'),
        hide: true
      },
      {
        firstName: 'Wahrie',
        lastName: 'Nzolobi',
        email: 'wahrie@gmail.com',
        isActive: true,
        registered: new Date('01/03/2015 07:30:00'),
        hide: true
      }
    ];

    // console.log(this.users);
  }

  // addUser(user: User) {
    // this.users.push(user);
  // }

  addUser() {
    this.user.isActive = true;
    this.user.registered = new Date();
    this.users.unshift(this.user);

    this.user = {
      firstName: '',
      lastName: '',
      email: ''
    };
    this.showUserForm = !this.showUserForm;
  }

  toggleHide(user: User) {
      user.hide = !user.hide;
  }
  // onSubmit(e) {
  //   e.preventDefault();
  //   console.log(123);
  // }
}
