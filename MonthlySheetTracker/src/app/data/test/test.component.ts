import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {
@Input() text!: string;
@Output() serveEvent = new EventEmitter();
}
