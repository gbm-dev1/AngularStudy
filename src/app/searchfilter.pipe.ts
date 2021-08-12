import { Pipe, PipeTransform } from '@angular/core';
import { User } from './models/user';

@Pipe({
  name: 'searchfilter',
})
export class SearchfilterPipe implements PipeTransform {
  transform(users: User[], searchValue: string): User[] {
    if (!users || !searchValue) {
      return users;
    }
    return users.filter(
      (user) =>
        user.name
          .toLocaleLowerCase()
          .includes(searchValue.toLocaleLowerCase()) ||
        user.username
          .toLocaleLowerCase()
          .includes(searchValue.toLocaleLowerCase()) ||
        user.type
          .toLocaleLowerCase()
          .includes(searchValue.toLocaleLowerCase()) ||
        user.id
          .toString()
          .toLocaleLowerCase()
          .includes(searchValue.toLocaleLowerCase()) ||
        user.terminalIds
          .toString()
          .toLocaleLowerCase()
          .includes(searchValue.toLocaleLowerCase())
    );
  }
}
