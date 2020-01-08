import {HomeComponent} from './home/home.component';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EmployeeComponent} from './employee/employee.component';
import {AdaugareAnuntComponent} from './employee/adaugare-anunt/adaugare-anunt.component';
import {CautareJobComponent} from './employee/cautare-job/cautare-job.component';
import {RegistrationComponent} from './registration/registration.component';
import {LoginComponent} from './login/login.component';
import {EmployerComponent} from './employer/employer.component';
import {CautareFreelancerComponent} from './employer/cautare-freelancer/cautare-freelancer.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { IncarcareDocumenteComponent } from './user-profile/incarcare-documente/incarcare-documente.component';
import { DetaliiProfilComponent } from './user-profile/detalii-profil/detalii-profil.component';
import {ContracteComponent} from './user-profile/contracte/contracte.component';
import {JobFavoriteComponent} from './user-profile/job-favorite/job-favorite.component';
import {FreelanceriFavoritiComponent} from './user-profile/freelanceri-favoriti/freelanceri-favoriti.component';

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'profil', component: UserProfileComponent, children: [
      {path: 'detalii', component: DetaliiProfilComponent},
      {path: 'documente', component: IncarcareDocumenteComponent}
    ]},
    {path: 'jobFavorit', component: JobFavoriteComponent},
    {path: 'freelancerFavorit', component: FreelanceriFavoritiComponent},
    {path: 'contracte', component: ContracteComponent},
    {
      path: 'candidat', component: EmployeeComponent, children: [
        {path: ' ', redirectTo: 'cautare'},
        {path: 'cautare', component: CautareJobComponent, data: { label: 'Cauta job' } },
        {path: 'anunt', component: AdaugareAnuntComponent, data: { label: 'Adauga anunt' } }
      ]
    },
    {
      path: 'angajator', component: EmployerComponent, children: [
        {path: 'cautare', component: CautareFreelancerComponent, data: { label: 'Cauta freelancer' }},
        {path: 'anunt', component: AdaugareAnuntComponent, data: { label: 'Adauga anunt' }}
      ]
    },
    {path: 'login', component: LoginComponent},
    {path: 'candidatRegistration', component: RegistrationComponent}

  ];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
