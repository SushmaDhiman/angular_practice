import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  test: boolean = true;
  applicationTitle: string = 'Monthly Tracking Sheet';
}
