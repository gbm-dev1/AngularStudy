import { Component } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'asdsd'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'dsadasd'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'asdasd'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'adde'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'asasd'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'asd'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'asdas'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'asdasd'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'asdasdsd'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'asdd'},
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tela';
  displayedColumns: string[] = ['demo-position', 'demo-name', 'demo-weight', 'demo-symbol'];
  dataSource = ELEMENT_DATA;
}
