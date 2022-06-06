import { Component, OnInit, ViewChild, TemplateRef, ElementRef } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  tdy: Date = new Date();

  @ViewChild('dialogRef')
  dialogRef!: TemplateRef<any>;


  constructor(public dialog:MatDialog) {}

  ngOnInit(): void {
  }

  openDialog(){
    console.log('open');
    
    const myTempDialog = this.dialog.open(this.dialogRef);
    myTempDialog.afterClosed().subscribe(()=>{
      console.log('closed');
      
    })
  }

  closeDialog(){
    console.log('close');
    this.dialog.closeAll()
    
  }

}
