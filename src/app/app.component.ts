import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngDatatable';
  input1 : String = "...";

  dingendAenderung(eintrag1 : String){
    this.input1=eintrag1;
  }
}
