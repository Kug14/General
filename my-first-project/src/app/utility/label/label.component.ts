import {Component,Input} from '@angular/core';

@Component({
    templateUrl : "./label.component.html",
    styleUrls : ['./label.component.css'],
    selector : "label-component"
})

export class LabelComponent
{
    @Input()
    text : String = "Kugan";
}