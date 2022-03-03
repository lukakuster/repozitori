import { Component, OnInit } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-grupisanje',
  templateUrl: './grupisanje.component.html',
  styleUrls: ['./grupisanje.component.css']
})
export class GrupisanjeComponent implements OnInit {
  title: string = "Ovo je nas naslov";
  editButton: boolean = true;
  usernames: User[] = [
    {username: 'caslav', firstName: 'Caslav'},
    {username: 'mikas', firstName: 'Mikas'},
    {username: 'cvecko', firstName: 'Cvecko'},
    {username: 'radule', firstName: 'Radule'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.editButton = !this.editButton;
  }

}
