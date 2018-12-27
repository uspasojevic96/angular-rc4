import {Component, ViewEncapsulation, ViewChild, OnInit} from '@angular/core';
import {RC4Service} from '../../src';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit{
  constructor(private rc4: RC4Service){

  }

  public ngOnInit(): void {
    console.log(this.rc4.RC4('hello', 'x>ÍÏ'));
  }
}

