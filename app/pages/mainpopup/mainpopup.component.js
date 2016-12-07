"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var MainpopupComponent = (function () {
    function MainpopupComponent(router, page) {
        this.router = router;
        this.isEditing = false;
    }
    MainpopupComponent.prototype.create = function () {
        this.isEditing = true;
    };
    MainpopupComponent.prototype.onclick = function () {
        console.log("Save item tapped.");
    };
    MainpopupComponent.prototype.onCancel = function () {
        console.log("Cancel item tapped.");
        this.isEditing = false;
    };
    MainpopupComponent = __decorate([
        core_1.Component({
            selector: "mainpopup",
            templateUrl: "pages/mainpopup/mainpopup.html",
            styleUrls: ["pages/mainpopup/mainpopup-comman.css"]
        }), 
        __metadata('design:paramtypes', [router_1.Router, page_1.Page])
    ], MainpopupComponent);
    return MainpopupComponent;
}());
exports.MainpopupComponent = MainpopupComponent;
//# sourceMappingURL=mainpopup.component.js.map