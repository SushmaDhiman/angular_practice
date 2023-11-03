import { Component } from '@angular/core';

@Component({
  selector: 'app-chid-comp',
  templateUrl: './chid-comp.component.html',
  styleUrls: ['./chid-comp.component.scss'],
})
export class ChidCompComponent {
  ngOnChanges() {
    console.log('ngOnChanges');
  }
  ngOnInit() {
    console.log('ngOnInit');
  }
  ngDoCheck() {
    console.log('ngDoCheck');
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }
}
