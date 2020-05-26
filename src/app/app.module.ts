import { BrowserModule } from '@angular/platform-browser';
import { NgModule,NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HomeComponent } from './components/home/home.component';
import { BookFormComponent } from './components/book-form/book-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';
import { FooterComponent } from './components/footer/footer.component';
import { LaoskywayComponent } from './components/laoskyway/laoskyway.component';
import { OnConstructionComponent } from './components/on-construction/on-construction.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { WebpageAdminComponent } from './components/webpage-admin/webpage-admin.component';
import { MainDirective } from './main.directive';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminSlideComponent } from './components/admin-slide/admin-slide.component';
import { AdminJobvacancyComponent } from './components/admin-jobvacancy/admin-jobvacancy.component';
import { HttpClientModule } from '@angular/common/http';
import { LoadingComponent } from './components/loading/loading.component';
import { MainPopupComponent } from './components/main-popup/main-popup.component';
import { FleetInfoComponent } from './components/fleet-info/fleet-info.component';
import { CargoTrackingComponent } from './components/cargo-tracking/cargo-tracking.component';
import { RouteMapComponent } from './components/route-map/route-map.component';
import { OrgChartComponent } from './components/org-chart/org-chart.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

import { AgmCoreModule } from '@agm/core';
import { LuangprabangDesComponent } from './components/luangprabang-des/luangprabang-des.component';
import { BokeoDesComponent } from './components/bokeo-des/bokeo-des.component';
import { OudomxayDesComponent } from './components/oudomxay-des/oudomxay-des.component';
import { LuangnamthaDesComponent } from './components/luangnamtha-des/luangnamtha-des.component';
import { FlightScheduleComponent } from './components/flight-schedule/flight-schedule.component';
import { ConfirmDialogComponent } from './dialogs/confirm-dialog/confirm-dialog.component';
import { AdminSetupComponent } from './components/admin-setup/admin-setup.component';
import { AdminNewuserComponent } from './dialogs/admin-newuser/admin-newuser.component';
import { EventEmitterService } from './services/event-emitter.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookFormComponent,
    FooterComponent,
    LaoskywayComponent,
    OnConstructionComponent,
    FeedbackComponent,
    WebpageAdminComponent,
    MainDirective,
    AdminLoginComponent,
    AdminSlideComponent,
    AdminJobvacancyComponent,
    LoadingComponent,
    MainPopupComponent,
    FleetInfoComponent,
    CargoTrackingComponent,
    RouteMapComponent,
    OrgChartComponent,
    ContactUsComponent,
    LuangprabangDesComponent,
    BokeoDesComponent,
    OudomxayDesComponent,
    LuangnamthaDesComponent,
    FlightScheduleComponent,
    ConfirmDialogComponent,
    AdminSetupComponent,
    AdminNewuserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyABmRtRVrqdxvZ30IQkt6_hJ4mGoQAhX9E'
    })
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [EventEmitterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
