import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nasa-switch-api',
  templateUrl: './nasa-switch-api.component.html',
  styleUrls: ['./nasa-switch-api.component.css']
})
export class NasaSwitchApiComponent implements OnInit {

  product:any = {}
  FetData(){
    fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY")
    .then(response=> response.json())
    .then(data=>{
      this.product = data
    })
  }

  OnLoadTemp:any = 'photo'
  constructor() { }

  ngOnInit(): void {
     this.FetData()
  }

  btnclick(e:any){
    this.OnLoadTemp = e.target.name
  }

}
