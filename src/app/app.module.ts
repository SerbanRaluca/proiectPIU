import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { MatIconModule, MatDialogModule } from '@angular/material';
import {MatSelectModule} from '@angular/material/select';
import {MatTabsModule} from '@angular/material/tabs';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from "@angular/material/toolbar";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app.routing.module';
import {MatCardModule} from '@angular/material/card';
import { EmployeeComponent } from './employee/employee.component';
import { AdaugareAnuntComponent } from './employee/adaugare-anunt/adaugare-anunt.component';
import { CautareJobComponent } from './employee/cautare-job/cautare-job.component';
import { RezultateCautareComponent } from './employee/cautare-job/rezultate-cautare/rezultate-cautare.component';
import {ChooseRegistrationComponent} from './registration/choose-registration/choose-registration.component';
import {CandidatRegistrationComponent} from './registration/candidat-registration/candidat-registration.component';
import {EmployerRegistrationComponent} from './registration/employer-registration/employer-registration.component';
import {LoginComponent} from './login/login.component';
import {EmployerComponent} from './employer/employer.component';
import {CautareFreelancerComponent} from './employer/cautare-freelancer/cautare-freelancer.component';
import { DetaliiJobComponent } from './employee/cautare-job/rezultate-cautare/detalii-job/detalii-job.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    EmployeeComponent,
    AdaugareAnuntComponent,
    CautareJobComponent,
    RezultateCautareComponent,
    ChooseRegistrationComponent,
    CandidatRegistrationComponent,
    EmployerRegistrationComponent,
    LoginComponent,
    EmployerComponent,
    CautareFreelancerComponent,
    DetaliiJobComponent
  ],

  entryComponents: [
    DetaliiJobComponent
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatCardModule,
    MatIconModule,
    MatSelectModule,
    MatTabsModule,
    MatGridListModule,
    MatListModule,
    MatMenuModule,
    MatToolbarModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
