import { Component,DoCheck,OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent implements OnInit {

editPage() {
  this.editPage();
}
  getData: any ;

  constructor(private _commonService: CommonService) { }


  // ngDoCheck(): void {
  //   this.getRegisterData();
  // }
  ngOnInit(): void {
    this.getRegisterData();
  }
 

  getRegisterData() {
    this._commonService.getRegisterData().subscribe(data => {
      this.getData = data;
    })
  }

  deleteData(id: any){
    this._commonService.deleteRegisterData(id).subscribe( data=>{
    })
    console.log(id);
  }

}
