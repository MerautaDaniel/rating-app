import { Component, OnInit } from '@angular/core';
import { Rating } from '../rating';

import { RatingService } from '../rating.service';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'],
})
export class RatingComponent implements OnInit {
  rates: Rating[] = [];
  selectedRate?: Rating;
  public rateValue: number = 0;

  constructor(private rateService: RatingService) {}

  ngOnInit(): void {
    this.getRate();
  }

  getRate(): void {
    this.rates = this.rateService.getRates();
  }

  onSelect(rate: Rating) {
    this.selectedRate = rate;
    this.rateValue = this.selectedRate.value;
  }

  onSubmit() {
    const rateCont = document.getElementById('rating_container');
    const messCont = document.getElementById('message_container');
    rateCont?.classList.add('d-none');
    messCont?.classList.remove('d-none');
  }
}
