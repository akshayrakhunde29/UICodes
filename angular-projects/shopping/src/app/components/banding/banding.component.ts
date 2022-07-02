import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banding',
  templateUrl: './banding.component.html',
  styleUrls: ['./banding.component.css']
})
export class BandingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  product:any = {
    Name: 'Samsung TV',
    Price: 5400.55,
    Stock: true
  }
  tableHeight:number = 100;
  tableWidth:number = 200;
  tableBorder:number = 1;
}
