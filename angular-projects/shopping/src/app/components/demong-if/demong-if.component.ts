import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demong-if',
  templateUrl: './demong-if.component.html',
  styleUrls: ['./demong-if.component.css']
})
export class DemongIfComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  product:any = {
    Name: "Samsung TV",
    Price: 50000,
    Preview: 'assets/netflixImg.png'
  }
}
