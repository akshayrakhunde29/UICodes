import { Component } from "@angular/core";

@Component ({
    selector: 'app-login',
    template: `<h1>{{title}}</h1>
                <p>good morning everyone</p>`,
    styles:['h1{text-align:center; background-color:blue; color:white}']
})

export class LogInComponent
{
    title:string = 'Shopping Login';
}