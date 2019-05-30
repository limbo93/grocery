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
import { MatDialogModule } from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';
import { ConfirmationDialogComponent } from './shared/components/confirmation-dialog/confirmation.dialog.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    NotificationComponent,
    LoginComponent,
    ConfirmationDialogComponent
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
    MatSnackBarModule,
    MatDialogModule
  ],
  entryComponents: [ConfirmationDialogComponent],
  providers: [NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
