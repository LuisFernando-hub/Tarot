import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TarotService {

  SERVER_URL = 'https://dentalclouddev.s3.amazonaws.com/challenge/tarot.json';

  constructor(private http: HttpClient) { }

  public getTarot() {
    return this.http.get(`${this.SERVER_URL}`)
  }
}
