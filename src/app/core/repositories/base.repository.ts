import { inject, Injectable } from "@angular/core";
import { addDoc, collection, collectionData, DocumentReference, Firestore } from "@angular/fire/firestore";
import { from, Observable } from "rxjs";

Injectable({
  providedIn: "root",
  
})
export class BaseRepository<T> {
  collection: string | undefined = undefined;
  private firestore: Firestore = inject(Firestore);
  constructor() { }
  private getCollectionName(): string {
    if (!this.collection) {
      return (<any>this).constructor.name;
    }
    return this.collection;
  }
  findAll(): Observable<T[] | undefined> {
    return collectionData(collection(this.firestore, this.getCollectionName())) as Observable<T[] | undefined>;
  }
  findById(id: string): Observable<T | undefined> {
    return collectionData(collection(this.firestore, `${this.getCollectionName()}/${id}`)) as Observable<T | undefined>;
  }
  insert(data: T): Observable<DocumentReference | undefined> {
    return from(addDoc(collection(this.firestore, this.getCollectionName()), data as any).then(ref => {
      return ref;
    }));
  }
}
