import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { NotepadApp } from './app.component';
import { NoteService } from './note.service';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { NotesPage } from '../pages/notes/notes';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    NotepadApp,
    HomePage,
    ListPage,
    NotesPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(NotepadApp),
    HttpModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    NotepadApp,
    HomePage,
    ListPage,
    NotesPage,
  ],
  providers: [
    NoteService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
