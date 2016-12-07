import { Component } from "@angular/core";
import { Router } from "@angular/router";
import {Page} from "ui/page";


@Component({
  selector: "mainpopup",
  templateUrl: "pages/mainpopup/mainpopup.html",
  styleUrls: ["pages/mainpopup/mainpopup-comman.css"]
})
export class MainpopupComponent {
	isEditing:boolean = false;


	constructor(private router: Router,page: Page){
  
  }
   
	create()
	{
		        this.isEditing = true;

		}

    onclick() {
        console.log("Save item tapped.");
       
    }

    onCancel() {
        console.log("Cancel item tapped.");
        this.isEditing = false;
    }
}
