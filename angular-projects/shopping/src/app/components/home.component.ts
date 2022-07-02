import { Component } from "@angular/core";

@Component ({
    selector:'app-home',
    template: `<h2>{{title}}</h2>
                <p>Online Shopping Application</p>
    `,
    styles:['h2{text-align:center; background-color:tomato; color:white; font-size:30px; padding:10px}', 'p{font-size:20px}']
})

export class HomeComponent
{
    title:string = 'Shopping Home';
}   