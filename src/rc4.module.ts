import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RC4Service} from './rc4.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
  ],
  declarations: [
  ],
  providers: [
    RC4Service
  ],
})
export class RC4Module { }
