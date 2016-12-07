"use strict";
var core_1 = require("@angular/core");
var Item = (function () {
    function Item(name) {
        this.name = name;
    }
    return Item;
}());
var items = ["ALL Members (header)", "Razor", "Rubick", "Phantom Lancer", "Legion Commander", "Brewmaster",
    "Outworld Devourer", "Sniper", "Lina", "Sven", "Visage", "Undying", "Tiny", "Tidehunter", "Puck", "Ursa",
    "Magnus", "Earthshaker", "Windrunner", "Techies", "Crystal Maiden", "Batrider", "Riki", "Invoker", "Venomancer",
    "Timbersaw", "Wraithking", "Anti Mage", "Ancient Apparition", "Troll Warlord", "Lich", "Enchantress",
    "Bristleback", "Pudge", "(footer)"];
var HomelistComponent = (function () {
    function HomelistComponent(elementRef) {
        this.elementRef = elementRef;
        this.dataItems = [];
        for (var i = 0; i < items.length; i++) {
            this.dataItems.push(new Item(items[i]));
        }
    }
    HomelistComponent.prototype.onSetupItemView = function (args) {
        args.view.context.third = (args.index % 3 === 0);
        args.view.context.header = ((args.index + 1) % items.length === 1);
        args.view.context.footer = (args.index + 1 === items.length);
    };
    HomelistComponent = __decorate([
        core_1.Component({
            selector: "homelist",
            templateUrl: "pages/homelist/homelist.html",
            styleUrls: ["pages/homelist/homelist-common.css"],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], HomelistComponent);
    return HomelistComponent;
}());
exports.HomelistComponent = HomelistComponent;
//# sourceMappingURL=homelist.component.js.map