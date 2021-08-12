import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { User } from './models/user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  user = {} as User;
  users: User[];
  title = 'Tela';

  searchValue: string;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getUsers();
  }

  // Chama o serviço para obter todos os users
  getUsers() {
    this.userService.getUsers().subscribe((users: User[]) => {
      this.users = users;
    });
  }

  // deleta um user
  deleteUser(user: User) {
    this.userService.deleteUser(user).subscribe(() => {
      this.getUsers();
    });
  }
}
