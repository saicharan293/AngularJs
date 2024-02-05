import { Component } from "@angular/core";

@Component({
    selector:'app-assign3',
    templateUrl:'assign3.component.html',
    styles:[`
        .five{
            color:white
        }
    `]
})
//? Add A button which says 'Display Details'
//? Add a paragraph with any content of your choice (e.g. 'Secret Password = tuna')
//? Toggle the displaying of that paragraph with the button created in the first step
//? Log all button clicks in an array and output that array below the secret paragraph (maybe log a timestamp or simply an incrementing number)
//? Starting at the 5th log item, give all future log items a blue background (via ngStyle) and white color (ngClass)
export class Assignment3{
    showSecret:boolean=false;
    log=[];

    onToggleDisplay(){
        this.showSecret=!this.showSecret;
        this.log.push(new Date())
    }
}