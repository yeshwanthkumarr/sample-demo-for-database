import { Component } from '@angular/core';
import { DataService} from '../app/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  results;
  x ;
  constructor(public dataService: DataService) {
    this.dataService.getData().subscribe((data) => {
      this.results = data;
    });
    this.getValues();
  }
  getValues() {
   this.x = this.dataService.sendData();

  }
}
