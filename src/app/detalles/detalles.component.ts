import { Component, OnInit,Input } from '@angular/core';

import { Villain1 } from '../villain1';


@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {

  @Input() villain?:Villain1;

  constructor() { }

  ngOnInit(): void {
  }

}
