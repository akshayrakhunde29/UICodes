import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for-demo',
  templateUrl: './for-demo.component.html',
  styleUrls: ['./for-demo.component.css']
})
export class ForDemoComponent implements OnInit {
  
  productData:any = {}
  OnPageLoad(){
    fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY")
    .then(response=> response.json())
    .then(data=>{
      this.productData = data
    })
  }

  constructor() { }

  ngOnInit(): void {
    this.OnPageLoad()
  }

}
