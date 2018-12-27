/**
 * RC4 encryption/decryption service
 *
 * @author Uros Spasojevic
 */
import {Injectable} from '@angular/core';

@Injectable()
export class RC4Service {
  /**
   * @private
   *
   * @property {number[]} S Stream array
   */
  private S: number[] = [];

  /**
   * @private
   *
   * @property {number[]} cipherText Integer representation of each character after encryption/decryption
   */
  private cipherText: number[];

  /**
   * @private
   *
   * @property {number} N RC4 number of bytes
   */
  private N = 256;

  /**
   * @private
   *
   * Initializes the RC4
   */
  private initialize(): void {
    let i = 0;
    this.S = [];

    while (i < this.N) {
      this.S.push(i++);
    }
  }

  /**
   * @private
   *
   * Key-scheduling algorithm
   *
   * @param {string} key Encryption/decryption key
   */
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

  /**
   * @private
   *
   * Pseudo-random generation algorithm
   *
   * @param {string} plainText Text to be encrypted/decrypted
   */
  private PRGA(plainText: string): void {
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

  /**
   * @private
   *
   * Swaps two elements in stream array
   *
   * @param {number} firstIndex Index of first element
   * @param {number} secondIndex Index of second element
   */
  private swap(firstIndex: number, secondIndex: number): void {
    let tmp = this.S[firstIndex];
    this.S[firstIndex] = this.S[secondIndex];
    this.S[secondIndex] = tmp;
  }

  /**
   * @public
   *
   * RC4 encryption/decryption
   *
   * @param {string} key Encryption/decryption key
   * @param {string} plainText Text to be encrypted/decrypted
   * @returns {string}
   */
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
