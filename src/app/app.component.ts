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

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getUsers();
  }

  // define se um user será criado ou atualizado
  saveUser(form: NgForm) {
    if (this.user.id !== undefined) {
      this.userService.updateUser(this.user).subscribe(() => {
        this.cleanForm(form);
      });
    } else {
      this.userService.saveUser(this.user).subscribe(() => {
        this.cleanForm(form);
      });
    }
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

  // copia o user para ser editado.
  editUser(user: User) {
    this.user = { ...user };
  }

  // limpa o formulario
  cleanForm(form: NgForm) {
    this.getUsers();
    form.resetForm();
    this.user = {} as User;
  }
}
