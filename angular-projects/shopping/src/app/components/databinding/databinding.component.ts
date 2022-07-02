import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

  product:any = {};
  productId:number = 1;
  constructor() { }

  ngOnInit(): void {
    fetch(`https://fakestoreapi.com/products/${this.productId}`)
    .then(response => response.json())
    .then(data => {
      this.product = data;
    })
  } 
}
