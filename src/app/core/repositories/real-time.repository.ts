import { Injectable } from "@angular/core";
import { getDatabase, onValue, push, ref } from "@angular/fire/database";

Injectable({
  providedIn: "root",
})
export class RealtimeRepository<T> {
  _collection!: string;
  db = getDatabase();
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
  private getCollectionRef() {
    return ref(this.db, this.collection);
  }
  findAll() {
    return this.getCollectionRef();
  }
  insert(data: T) {
    return push(this.getCollectionRef(), data);
  }
}
