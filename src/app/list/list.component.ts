import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { DoListService } from '../do-list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  list_object: any;
  status = false;
  checked=false;
  constructor(private list_service: DoListService) {

    this.list_object = this.list_service.nameList();

  }

  ngOnInit(): void {


    this.list_service.input.subscribe((res) => {
      this.list_object = res;
      


    });
  }
  deleteItem(index: number) {
    this.list_service.removeItem(index)
  }
  editRecord(index: number) {
    this.list_service.sendItem.next(index)

  }


  checkList(id: number) {
  this.checked=true;
   this.list_object.map((v: any,i: any)=>{
  if(id==i){
    v.Active=!v.Active;
    
  }
  })

  }

}
