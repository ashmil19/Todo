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

  @ViewChild('dialogAddRef')
  dialogAddRef!: TemplateRef<any>;

  @ViewChild('dialogUpdateRef')
  dialogUpdateRef!: TemplateRef<any>;

  @ViewChild('dialogDeleteRef')
  dialogDeleteRef!: TemplateRef<any>;

  constructor(public dialog: MatDialog, private api: ApiService) { }

  ngOnInit(): void {
    this.getAll();

    this.api.refreshRequired.subscribe(resp =>{
      this.getAll(); 
    })
  }





  // get todo methods

  today$: any;
  week$: any;
  month$: any;

  getTodayData() {
    this.api.getToday().subscribe(data => {
      this.today$ = data;
    })
  }

  getWeekData() {
    this.api.getWeek().subscribe(data => {
      this.week$ = data;
    })
  }

  getMonthData() {
    this.api.getMonth().subscribe(data => {
      this.month$ = data;
    })
  }

  getAll() {
    this.getTodayData();
    this.getWeekData();
    this.getMonthData();
  }

  // add button dialog function

  openAddDialog() {
    console.log('add open');

    const myTempDialog = this.dialog.open(this.dialogAddRef, { disableClose: true });
    myTempDialog.afterClosed().subscribe(() => {
      console.log('closed');

    })
  }

  closeDialog() {
    console.log('close');
    this.dialog.closeAll();
  }


  // post todo method

  toggleValue = "TD";

  addTodo(form: any) {
    console.log(form);

    if(form.content != ""){

      if (form.when == "TD") {
        this.dialog.closeAll();
        this.api.postToday(form).subscribe(data => {
          console.log(data);
        })
      }
  
      if (form.when == "TW") {
        this.dialog.closeAll();
        this.api.postWeek(form).subscribe(data => {
          console.log(data);
        })
      }
  
      if (form.when == "TM") {
        this.dialog.closeAll();
        this.api.postMonth(form).subscribe(data => {
          console.log(data);
        })
      }

    }

  }

  // update button dailog function 

  formData: any;

  openUpdateDialog(form: any) {
    console.log('update open');
    this.formData = form;
    console.log('upda', this.formData);

    const myTempDialog = this.dialog.open(this.dialogUpdateRef, { disableClose: true, data: this.formData });
    myTempDialog.afterOpened().subscribe(() => {
      console.log('update dialog open');

    })

  }


  // todo put method

  updateTodo(form: any) {
    console.log('form', form);
    console.log('formData', this.formData);

    if(form.content != ""){

      if (this.formData.when == form.when) {
  
        const updateData = this.formData;
        updateData.content = form.content;
        updateData.when = form.when;
  
        if (updateData.when == 'TD') {
          this.dialog.closeAll();
          this.api.putToday(updateData.id, updateData).subscribe(dat => {
            console.log(dat);
          })
        }
  
        if (updateData.when == 'TW') {
          this.dialog.closeAll();
          this.api.putWeek(updateData.id, updateData).subscribe(dat => {
            console.log(dat);
          })
        }
  
        if (updateData.when == 'TM') {
          this.dialog.closeAll();
          this.api.putMonth(updateData.id, updateData).subscribe(dat => {
            console.log(dat);
          })
        }
  
      }

    }



  }


  // delete button dialog function


  openDeleteDialog(form: any) {
    console.log(form);


    const myTempDialog = this.dialog.open(this.dialogDeleteRef, { data: form });
    myTempDialog.afterOpened().subscribe(() => {
      console.log('delete');

    })
  }


  // todo delete method

  deleteTodo(dlt: any) {
    console.log(dlt);

    if (dlt.when == 'TD') {
      this.api.deleteToday(dlt.id).subscribe(data => {
        console.log(data);
        this.dialog.closeAll();
      })
    }

    if (dlt.when == 'TW') {
      this.api.deleteWeek(dlt.id).subscribe(data => {
        console.log(data);
        this.dialog.closeAll();
      })
    }

    if (dlt.when == 'TM') {
      this.api.deleteMonth(dlt.id).subscribe(data => {
        console.log(data);
        this.dialog.closeAll();
      })
    }
  }


}
