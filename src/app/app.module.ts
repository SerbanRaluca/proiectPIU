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
import {MatProgressBarModule} from '@angular/material/progress-bar';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app.routing.module';
import {MatCardModule} from '@angular/material/card';
import { EmployeeComponent } from './employee/employee.component';
import { AdaugareAnuntComponent } from './employee/adaugare-anunt/adaugare-anunt.component';
import { CautareJobComponent } from './employee/cautare-job/cautare-job.component';
import { RezultateCautareComponent } from './employee/cautare-job/rezultate-cautare/rezultate-cautare.component';
import {RegistrationComponent} from './registration/registration.component';
import {LoginComponent} from './login/login.component';
import {EmployerComponent} from './employer/employer.component';
import {CautareFreelancerComponent} from './employer/cautare-freelancer/cautare-freelancer.component';
import { DetaliiJobComponent } from './employee/cautare-job/rezultate-cautare/detalii-job/detalii-job.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserContracteComponent } from './user-contracte/user-contracte.component';
import { ProfilFacebookComponent } from './user-profile/detalii-profil/profil-facebook/profil-facebook.component'
import {AdaugareAnuntJobComponent} from './employer/adaugare-anunt-job/adaugare-anunt-job.component';
import {RezultateCautareFreelanceriComponent} from './employer/cautare-freelancer/rezultate-cautare-freelanceri/rezultate-cautare-freelanceri.component';
import {DetaliiFreelancerComponent} from './employer/cautare-freelancer/rezultate-cautare-freelanceri/detalii-freelancer/detalii-freelancer.component';
import { IncarcareDocumenteComponent } from './user-profile/incarcare-documente/incarcare-documente.component';
import { DetaliiProfilComponent } from './user-profile/detalii-profil/detalii-profil.component';
import { ConfirmareCautareComponent } from './confirmare-cautare/confirmare-cautare.component';
import { AgmCoreModule } from '@agm/core';
import { AsistentaAudioComponent } from './asisienta-audio/asisienta-audio.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    EmployeeComponent,
    AdaugareAnuntComponent,
    CautareJobComponent,
    RezultateCautareComponent,
    RegistrationComponent,
    LoginComponent,
    EmployerComponent,
    CautareFreelancerComponent,
    DetaliiJobComponent,
    UserProfileComponent,
    UserContracteComponent,
    ProfilFacebookComponent,
    AdaugareAnuntJobComponent,
    RezultateCautareFreelanceriComponent,
    DetaliiFreelancerComponent,
    IncarcareDocumenteComponent,
    DetaliiProfilComponent,
    ConfirmareCautareComponent,
    AsistentaAudioComponent
  ],

  entryComponents: [
    DetaliiJobComponent,
    DetaliiFreelancerComponent,
    ConfirmareCautareComponent,
    AsistentaAudioComponent
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
    MatDialogModule,
    MatProgressBarModule,
    AgmCoreModule.forRoot({
      // please get your own API key here:
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
      apiKey: ''
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
