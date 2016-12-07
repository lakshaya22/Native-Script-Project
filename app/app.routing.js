"use strict";
var login_component_1 = require("./pages/login/login.component");
var list_component_1 = require("./pages/list/list.component");
var tabs_component_1 = require("./pages/tabs/tabs.component");
var homelist_component_1 = require("./pages/homelist/homelist.component");
var mainpopup_component_1 = require("./pages/mainpopup/mainpopup.component");
exports.routes = [
    { path: "", component: login_component_1.LoginComponent },
    { path: "list", component: list_component_1.ListComponent },
    { path: "tabs", component: tabs_component_1.TabsComponent },
    { path: "homelist", component: homelist_component_1.HomelistComponent },
    { path: "mainpopup", component: mainpopup_component_1.MainpopupComponent }
];
exports.navigatableComponents = [
    login_component_1.LoginComponent,
    list_component_1.ListComponent,
    tabs_component_1.TabsComponent,
    homelist_component_1.HomelistComponent,
    mainpopup_component_1.MainpopupComponent
];
//# sourceMappingURL=app.routing.js.map