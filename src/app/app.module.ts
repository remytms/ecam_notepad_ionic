import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { NotepadApp } from './app.component';
import { NoteService } from './note.service';
import { CategoryService } from './category.service';

import { NotesPage } from '../pages/notes/notes';
import { CategoriesPage } from '../pages/categories/categories';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    NotepadApp,
    NotesPage,
    CategoriesPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(NotepadApp),
    HttpModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    NotepadApp,
    NotesPage,
    CategoriesPage,
  ],
  providers: [
    NoteService,
    CategoryService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
