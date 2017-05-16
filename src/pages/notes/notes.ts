import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Note } from '../../app/note';
import { Category } from '../../app/category';
import { NoteService } from '../../app/note.service';
import { CategoryService } from '../../app/category.service';

@Component({
  selector: 'page-notes',
  templateUrl: 'notes.html',
})
export class NotesPage implements OnInit {
  title = 'Notes';

  notes = null;
  categories = null;
  note_edited = -1;
  new_note: Note = null;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private note_service: NoteService,
    private category_service: CategoryService
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

  getCategories(): void {
    this.category_service.getCategories().subscribe(
      // function that runs on success
      data => { this.categories = data},
      // function that runs on error
      err => console.error(err),
      // function that runs on completion
      () => console.log(this.categories)
      //null
    );
  }

  validate(note: Note) {
    console.log(note);
    this.note_edited = -1;
  }

  newNote(note: Note) {
    this.note_service.newNote(note).subscribe(
      data => { this.notes.unshift(data) },
      err => console.error(err),
      () => { this.new_note = null }
    );
  }

  updateNote(note: Note, index: number): void {
    this.note_service.updateNote(note).subscribe(
      data => { this.notes[index] = data},
      err => console.error(err),
      () => { this.note_edited = -1; }
    );
  }

  deleteNote(note: Note, index: number) {
    this.note_service.deleteNote(note).subscribe(
      data => { this.notes.splice(index, 1) },
      err => console.error(err),
      () => { }
    );
  }

  initNewNote() {
    this.new_note = new Note();
    this.new_note.category = new Category();
  }

  deleteNewNote() {
    this.new_note = null;
  }

  ngOnInit(): void {
    this.getNotes();
    this.getCategories();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Notes');
  }

}
