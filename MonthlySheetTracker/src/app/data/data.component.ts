import {
  Component,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
  ViewChild,
  AfterViewInit,
  ElementRef,
  inject,
} from '@angular/core';
import { CommonService } from '../services/common.service';
import { style } from '@angular/animations';
import { FormArray, FormControl } from '@angular/forms';
@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss'],
  // styles : ['p {font-size:50px; color:red;}']
})
export class DataComponent implements AfterViewInit {
  public _commonService = inject(CommonService);
  // constructor(public _commonService: CommonService) {}
  // ngAfterViewInit(): void {
  //   throw new Error('Method not implemented.');
  // }
  detail = this._commonService.detail;

  @ViewChild('name') test!: ElementRef;
  ngAfterViewInit(): void {
    this._commonService.text;
    this.test.nativeElement.style.color = 'red';
  }
  
  [x: string]: any;
  @Input() pass: any;
  @Output() passDataEvent = new EventEmitter();
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges');
  }
  myData(){
    var x=this._commonService.text;
    console.log(x);
  }
  title: string = 'this is send data parent to child';

serve(data: any){
console.log(data);
}



}