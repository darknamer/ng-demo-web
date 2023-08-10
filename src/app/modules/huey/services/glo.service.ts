import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GloService {

  constructor(
    private http: HttpClient,
  ) { }

  getLatestLottory(year: number) {
    const url = `http://localhost:3000/getLotteryResultByYear?year=${year}`;
    return this.http.get(url);
  }
}
