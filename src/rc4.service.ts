import {Injectable} from '@angular/core';

@Injectable()
export class RC4Service {
  private S: number[] = [];
  private cipherText: any[];
  private N = 256;

  constructor() {
  }

  private initialize(): void {
    let i = 0;

    while (i < this.N) {
      this.S.push(i++);
    }
  }

  private KSA(key: string): void {
    let keyLength = key.length;
    let i = 0;
    let j = 0;

    while (i < this.N) {
      j = (j + this.S[i] + key.charCodeAt(i % keyLength)) % this.N;

      this.swap(i, j);

      i++;
    }
  }

  private PRGA(plainText: string) {
    let i = 0;
    let j = 0;
    let n = 0;
    let len = plainText.length;
    let rnd: number;
    while (n < len) {
      i = (i + 1) % this.N;
      j = (j + this.S[i]) % this.N;

      this.swap(i, j);

      rnd = this.S[(this.S[i] + this.S[j]) % this.N];
      this.cipherText[n] = rnd ^ plainText.charCodeAt(n);
      n++;
    }
  }

  private swap(firstIndex: number, secondIndex: number): void {
    let tmp = this.S[firstIndex];
    this.S[firstIndex] = this.S[secondIndex];
    this.S[secondIndex] = tmp;
  }

  public RC4(key: string, plainText: string): string {
    this.cipherText = new Array<number>(plainText.length);
    this.initialize();

    this.KSA(key);

    this.PRGA(plainText);

    let i = 0;
    let str = '';
    while (i < plainText.length) {
      str += String.fromCharCode(this.cipherText[i]);
      i++;
    }

    return str;
  }
}
