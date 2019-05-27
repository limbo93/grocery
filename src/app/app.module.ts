import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { NotificationComponent } from './core/notification/notification.component';
import { NotificationService } from './core/notification/notification.service';
import { MatSnackBarModule, MatButtonModule } from '@angular/material';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NotificationComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,

    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule, // relatime db
    AngularFireAuthModule, //auth
    AngularFirestoreModule,

    MatButtonModule,
    MatSnackBarModule
  ],
  providers: [NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
