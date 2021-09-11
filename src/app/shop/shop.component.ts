import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  models = [];

  constructor() { }

  ngOnInit(): void {
    this.models.push({title: '1', description: 'tthtrf'});
    this.models.push({title: '2', description: 'gsdds'});
    this.models.push({title: '3', description: 'gdsgdsgdsgdg'});
    this.models.push({title: '4', description: 'sfsdgdg'});
  }

}
