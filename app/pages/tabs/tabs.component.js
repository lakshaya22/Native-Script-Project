"use strict";
var core_1 = require("@angular/core");
var button_1 = require("ui/button");
var dialogs = require("ui/dialogs");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var buttonModule = require("ui/button");
var TabsComponent = (function () {
    function TabsComponent(router, page) {
        this.router = router;
        this.selectedIndex = 0;
        this.visibility1 = true;
        this.visibility2 = false;
        this.visibility3 = false;
        this.visibility4 = false;
        this.toggleDialog = true;
        this.items = [];
        for (var i = 1; i < 5; i++) {
            var tmpSegmentedBar = new button_1.Button();
            var button1 = new buttonModule.Button();
            this.items.push(button1);
        }
        this.selectedIndex = 0;
        if (this.visibility3) {
            page.actionBarHidden = true;
        }
    }
    TabsComponent.prototype.displayActionDialog = function () {
        var _this = this;
        // >> action-dialog-code
        this.toggleDialog = false;
        var options = {
            title: "Add",
            message: "Choose your option",
            cancelButtonText: "Cancel",
            actions: ["Booking", "Lead", "Member", "Package"]
        };
        dialogs.action(options).then(function (result) {
            _this.toggleDialog = true;
            //this.router.navigate(["/list"]);
        });
    };
    TabsComponent.prototype.onChange = function (value) {
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
    };
    TabsComponent = __decorate([
        core_1.Component({
            templateUrl: "pages/tabs/tabs.html",
            styleUrls: ["pages/tabs/tabs-common.css"]
        }), 
        __metadata('design:paramtypes', [router_1.Router, page_1.Page])
    ], TabsComponent);
    return TabsComponent;
}());
exports.TabsComponent = TabsComponent;
//# sourceMappingURL=tabs.component.js.map