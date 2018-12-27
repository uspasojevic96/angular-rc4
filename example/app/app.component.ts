import {Component, ViewEncapsulation, ViewChild, OnInit} from '@angular/core';
import {RC4Service} from '../../src';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  public initialText = 'Hello everyone';
  public encryptedText: string;
  public decryptedText: string;

  constructor(private rc4: RC4Service) {

  }

  public ngOnInit(): void {
    this.encryptedText = this.rc4.RC4('hello', this.initialText);
    this.decryptedText = this.rc4.RC4('hello', this.encryptedText);
  }
}

