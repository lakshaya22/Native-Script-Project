import { Component, ChangeDetectionStrategy, ElementRef } from "@angular/core";
import { SetupItemViewArgs } from "nativescript-angular/directives";

class Item {
    constructor(public name: string) { }
}

let items = ["ALL Members (header)", "Razor", "Rubick", "Phantom Lancer", "Legion Commander", "Brewmaster",
    "Outworld Devourer", "Sniper", "Lina", "Sven", "Visage", "Undying", "Tiny", "Tidehunter", "Puck", "Ursa",
    "Magnus", "Earthshaker", "Windrunner", "Techies", "Crystal Maiden", "Batrider", "Riki", "Invoker", "Venomancer",
    "Timbersaw", "Wraithking", "Anti Mage", "Ancient Apparition", "Troll Warlord", "Lich", "Enchantress",
    "Bristleback", "Pudge", "(footer)"];

@Component({
  selector: "homelist",
  templateUrl: "pages/homelist/homelist.html",
  styleUrls: ["pages/homelist/homelist-common.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class HomelistComponent {

	public dataItems: Array<Item>;

    constructor(public elementRef: ElementRef) {
        this.dataItems = [];

        for (let i = 0; i < items.length; i++) {
            this.dataItems.push(new Item(items[i]));
        }
    }

    onSetupItemView(args: SetupItemViewArgs) {
        args.view.context.third = (args.index % 3 === 0);
        args.view.context.header = ((args.index + 1) % items.length === 1);
        args.view.context.footer = (args.index + 1 === items.length);
    }
}