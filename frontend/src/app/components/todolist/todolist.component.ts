import { Component, OnInit, ViewChild, TemplateRef, ElementRef } from '@angular/core';

import { map } from 'rxjs/operators';

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
    this.getTodoData();

    this.api.refreshRequired.subscribe(resp => {
      this.getTodoData();
    })
  }






  val: any;

  today$: any[] = [];
  week$: any[] = [];
  month$: any[] = [];


  // get todo data method

  getTodoData() {
    this.api.getTodo().subscribe(data => {
      this.today$.length = 0;
      this.week$.length = 0;
      this.month$.length = 0;

      this.checkTodoSection(data);

    })
  }


  checkTodoSection(value: Array<any>) {


    value.forEach((val: any) => {

      if (val.when == 'TD') {

        this.today$.push(val);
      }

      if (val.when == 'TW') {

        this.week$.push(val);
      }

      if (val.when == 'TM') {

        this.month$.push(val);
      }

    });

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

    if (form.content != "") {

      this.dialog.closeAll();
      this.api.postTodo(form).subscribe(data => {
        console.log(data);
      })

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

    if (form.content != "") {

      const updateData = this.formData;
      updateData.content = form.content;
      updateData.when = form.when;


      this.dialog.closeAll();
      this.api.putTodo(updateData, updateData.id).subscribe(data => {
        console.log(data);

      })

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

    this.dialog.closeAll();
    this.api.deleteTodo(dlt.id).subscribe(data => {
      console.log(data);
    })

  }


  // change isdone function

  todoIsDone(form: any) {

    this.api.putTodo(form, form.id).subscribe(data => {
      console.log(data);

    })


  }


  changeIsDone(form: any) {
    console.log(form);

    if (form.isDone) {
      form.isDone = false;
      this.todoIsDone(form);
      return;
    }

    if (!form.isDone) {
      form.isDone = true;
      this.todoIsDone(form);
    }

  }

}

