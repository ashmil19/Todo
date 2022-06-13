import { Component, OnInit, ViewChild, TemplateRef, ElementRef } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  tdy: Date = new Date();

  @ViewChild('dialogRef')
  dialogRef!: TemplateRef<any>;


  constructor(public dialog:MatDialog, private api:ApiService) {}

  ngOnInit(): void {
    this.getAll();
  }

  today$:any;
  week$:any;
  month$:any;

  getTodayData(){
    this.api.getToday().subscribe(data =>{
      this.today$ = data;
    })
  }

  getWeekData(){
    this.api.getWeek().subscribe(data =>{
      this.week$ = data;
    })
  }

  getMonthData(){ 
    this.api.getMonth().subscribe(data =>{
      this.month$ = data;
    })
  }

  getAll(){
    this.getTodayData();
    this.getWeekData();
    this.getMonthData();
  }

  openAddDialog(){
    console.log('open');
    
    const myTempDialog = this.dialog.open(this.dialogRef, {disableClose: true});
    myTempDialog.afterClosed().subscribe(()=>{
      console.log('closed');
      
    })
  }

  closeAddDialog(){
    console.log('close');
    this.dialog.closeAll();
  }

  
  
  

}
