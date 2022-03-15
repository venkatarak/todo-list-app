import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoListService {
  id: any;
  input = new Subject<any>();
  sendItem = new Subject<number>()
  constructor() { }
  list: any = [];

  nameList() {
    return this.list.slice();
  }
  addList(value: NgForm) {

    this.list.push(value);
    for (let i = 0; i < this.list.length; i++) {
      if (!this.list[i].Active) {
        this.list[i].Active = false;
      }
    }
    this.input.next(this.list.slice())
  }

  removeItem(index: number) {
    this.list.
      splice(index, 1);
    this.input.next(this.list.slice());
  }
  editRec(index: number) {
    return this.list[index]

  }

  update(index: number, value: any) {
    this.list[index] = value
    this.input.next(this.list.slice());
  }

}
