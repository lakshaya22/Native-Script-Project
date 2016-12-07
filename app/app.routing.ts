import { LoginComponent } from "./pages/login/login.component";
import { ListComponent } from "./pages/list/list.component";
import { TabsComponent } from "./pages/tabs/tabs.component";
import { HomelistComponent } from "./pages/homelist/homelist.component";
import { MainpopupComponent } from "./pages/mainpopup/mainpopup.component";
export const routes = [
  { path: "", component: LoginComponent },
  { path: "list", component: ListComponent },
  { path: "tabs", component: TabsComponent },
  { path: "homelist", component: HomelistComponent },
  { path: "mainpopup", component: MainpopupComponent }


];

export const navigatableComponents = [
  LoginComponent,
  ListComponent,
  TabsComponent,
  HomelistComponent,
  MainpopupComponent
];