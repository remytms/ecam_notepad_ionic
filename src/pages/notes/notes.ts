import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { NoteService } from '../../app/note.service';

@Component({
  selector: 'page-notes',
  templateUrl: 'notes.html',
})
export class NotesPage implements OnInit {
  title = 'Notes';

  notes = null;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private note_service: NoteService
  ) {
  }

  getNotes(): void {
    this.note_service.getNotes().subscribe(
      // function that runs on success
      data => { this.notes = data},
      // function that runs on error
      err => console.error(err),
      // function that runs on completion
      () => console.log(this.notes)
      //null
    );
  }

  ngOnInit(): void {
    this.getNotes();
    //this.getCategories();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Notes');
  }

}
