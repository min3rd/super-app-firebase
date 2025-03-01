import { inject, Injectable } from "@angular/core";
import { addDoc, collection, collectionData, DocumentReference, Firestore } from "@angular/fire/firestore";
import { from, Observable } from "rxjs";

Injectable({
  providedIn: "root",

})
export class BaseRepository<T> {
  _collection!: string;
  private firestore: Firestore = inject(Firestore);
  constructor() { }
  private get collection(): string {
    if (!this._collection) {
      return (<any>this).constructor.name;
    }
    return this._collection;
  }
  private set collection(collection: string) {
    this._collection = collection;
  }
  findAll(): Observable<T[] | undefined> {
    return collectionData(collection(this.firestore, this.collection)) as Observable<T[] | undefined>;
  }
  findById(id: string): Observable<T | undefined> {
    return collectionData(collection(this.firestore, `${this.collection}/${id}`)) as Observable<T | undefined>;
  }
  insert(data: T): Observable<DocumentReference | undefined> {
    return from(addDoc(collection(this.firestore, this.collection), data as any).then(ref => {
      return ref;
    }));
  }
}
