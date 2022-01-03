import { ProfilComponent } from './profil/profil.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { AppComponent } from './app.component';
import { MessageComponent } from './message/message.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"",component: MainLayoutComponent,
   children: [
    {path:"dashboard",component: DashboardComponent},
    {path:"message",component: MessageComponent},
    {path:"profil",component: ProfilComponent}
  ]
  },
  {path:"connexion",component: ConnexionComponent},
  {path:"*",redirectTo: "/app", pathMatch: "full"}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
