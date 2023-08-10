import { Component, OnInit } from '@angular/core';
import { GloService } from '../../services/glo.service';

@Component({
  selector: 'app-huey-list',
  templateUrl: './huey-list.component.html',
  styleUrls: ['./huey-list.component.scss']
})
export class HueyListComponent implements OnInit {
  lottory: any[] = [];

  constructor(private glo: GloService) { }

  ngOnInit(): void {
    this.getLottory(2023);
  }

  getLottory(year: number) : void {
    this.glo.getLatestLottory(year).subscribe({
      next: (value: any) => {
        this.lottory = value.response;
      },
    });
  }
}
