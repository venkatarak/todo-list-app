import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { DoListService } from '../do-list.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
  listindex!: number;
  object:any;
  editMode=false;
  

  myform!: FormGroup;

  

  constructor(private list_servicel:DoListService) { }

  ngOnInit(): void {

    this.myform=new FormGroup({
      'name':new FormControl('',Validators.required)
    })

    this.list_servicel.sendItem.subscribe((index:number)=>{
      this.listindex=index
     this.object= this.list_servicel.editRec(index);
    this.myform.controls['name'].setValue(
      this.object.name
    )
     
     
    //  this.valref.setValue({
    //    name:this.object.name
      
    //  })
     this.editMode=true
    
    })
  }
 

  sendName(value:any){
   
    
      
      this.list_servicel.addList(value)

    this.myform.reset();
  }
  
  updateRecord(){

    this.list_servicel.update(this.listindex,this.myform.value);
    this.editMode=false;
    this.myform.reset();

  }



}
