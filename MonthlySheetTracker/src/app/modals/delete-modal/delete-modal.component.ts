import { Component,Inject } from '@angular/core';
import { MatDialog,MAT_DIALOG_DATA } from '@angular/material/dialog'
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.scss']
})
export class DeleteModalComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public dialogData:{id:any},private dialogRef: MatDialog,private _commonService: CommonService){ }

  closeDialog(){
 this.dialogRef.closeAll()
  }
  deleteRegisterData(){
    console.log("object");
    this._commonService.deleteRegisterData(this.dialogData.id).subscribe( data=>{
    })
    this.dialogRef.closeAll()
    
  }

}
