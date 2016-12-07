import { Component } from "@angular/core";
import { SegmentedBarItem } from "ui/segmented-bar";
import { Button } from "ui/button";
import dialogs = require("ui/dialogs");
import { Router } from "@angular/router";
import {Page} from "ui/page";
var buttonModule = require("ui/button");
@Component({
    templateUrl: "pages/tabs/tabs.html",
    styleUrls: ["pages/tabs/tabs-common.css"]
})
export class TabsComponent {
    public items: Array<Button>;
    public selectedIndex = 0;
    public visibility1 = true;
    public visibility2 = false;
    public visibility3 = false;
    public visibility4 = false;
    public toggleDialog = true;
    constructor(private router: Router,page: Page) {
        this.items = [];
        for (let i = 1; i < 5; i++) {
            let tmpSegmentedBar: Button = <Button>new Button();
            var button1=new buttonModule.Button();
           
            this.items.push(button1);
        }

        this.selectedIndex = 0;
      
        if(this.visibility3)
        {
            page.actionBarHidden = true;
        }
        
    }
   
   displayActionDialog() {
        // >> action-dialog-code
        this.toggleDialog = false;
        let options = {
            title: "Add",
            message: "Choose your option",
            cancelButtonText: "Cancel",
            actions: ["Booking", "Lead", "Member", "Package"]
        };
        dialogs.action(options).then((result) => {
            this.toggleDialog = true;
            //this.router.navigate(["/list"]);
        });
     
    }

    public onChange(value) {
        this.selectedIndex = value;

        switch (value) {
            case 0:
                this.visibility1 = true;
                this.visibility2 = false;
                this.visibility3 = false;
                this.visibility4 = false;
                break;
            case 1:
                this.visibility1 = false;
                this.visibility2 = true;
                this.visibility3 = false;
                this.visibility4 = false;
                break;
            case 2:
                this.visibility1 = false;
                this.visibility2 = false;
                this.visibility3 = true;
                this.visibility4 = false;
                break;
            case 3:
                this.visibility1 = false;
                this.visibility2 = false;
                this.visibility3 = false;
                this.visibility4 = true;
                break;
            default:
                break;
        }
    }

}