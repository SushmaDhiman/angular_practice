import { Component,ViewEncapsulation } from '@angular/core';
import { CommonService } from './services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
// encapsulation: ViewEncapsulation.ShadowDom,
})
export class AppComponent {
  title = 'MonthlySheetTracker';
 data = {
 firstName: 'Ram',
   lastName: 'Sharma',
   age: 30,
   };
  info = 'x';
  passData(item: any) {
    console.log(item);
    this.info = item;
  }
  text: string = 'this is a mixin';
  test: string = 'this is a mixin';
}
