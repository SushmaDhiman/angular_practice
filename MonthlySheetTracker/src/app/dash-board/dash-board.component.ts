import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteModalComponent } from '../modals/delete-modal/delete-modal.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent implements OnInit {
  getData: any;
  constructor(private _commonService: CommonService, private dialogRef: MatDialog, private snackBar: MatSnackBar) { }
  ngOnInit(): void {
    this.getRegisterData();
    if(this._commonService.snackBarMessage === "Data registered SuccessFully"){
      this.snackBar.open(this._commonService.snackBarMessage);
    }
    console.log(this._commonService.snackBarMessage);
  }
  
  editPage(id: any) {
    this._commonService.getDataID = id;
  }
  getRegisterData() {
    this._commonService.getRegisterData().subscribe(data => {
      this.getData = data;
    })
  }
  deleteRegisterData(id: any) {
    this._commonService.snackBarMessage = "Data registered SuccessFully";
    this.dialogRef.open(DeleteModalComponent, {
      width: "600px",
      data: { id: id },
    });
    this.dialogRef.afterAllClosed.subscribe(data => {
      this.getRegisterData();
    })
    console.log(this._commonService.snackBarMessage);
  }
}
