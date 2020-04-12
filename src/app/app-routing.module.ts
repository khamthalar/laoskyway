import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { OnConstructionComponent } from './components/on-construction/on-construction.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { WebpageAdminComponent } from './components/webpage-admin/webpage-admin.component';
import { LaoskywayComponent } from './components/laoskyway/laoskyway.component';
import { FleetInfoComponent } from './components/fleet-info/fleet-info.component';
import { CargoTrackingComponent } from './components/cargo-tracking/cargo-tracking.component';
import { RouteMapComponent } from './components/route-map/route-map.component';
import { OrgChartComponent } from './components/org-chart/org-chart.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { LuangprabangDesComponent } from './components/luangprabang-des/luangprabang-des.component';
import { BokeoDesComponent } from './components/bokeo-des/bokeo-des.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'on-construction',component:OnConstructionComponent},
  {path:'feedback',component:FeedbackComponent},
  {path:'wp-admin',component:WebpageAdminComponent},
  {path:'about-us-laoskyway',component:LaoskywayComponent},
  {path:'about-us-FleetInfo',component:FleetInfoComponent},
  {path:'cargo_check',component:CargoTrackingComponent},
  {path:'route_map',component:RouteMapComponent},
  {path:'org_chart',component:OrgChartComponent},
  {path:'contact_us',component:ContactUsComponent},
  {path:'luangprabang_des',component:LuangprabangDesComponent},
  {path:'bokeo_des',component:BokeoDesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
