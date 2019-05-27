import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    // this.createBook();
    // this.updateBook('World war Z');
    // this.deleteBook();
    // this.bookRef = this.db.list('books');
    // this.bookObservable = this.bookRef.valueChanges();

  }

  createBook() {
    const book = { title: 'World war Z' }
    return this.db.object('/books/br')
      .set(book)
  }
}
