import { Injectable } from '@angular/core';
import { Rating } from './rating';
import { RATINGS } from './mock-rates';

@Injectable({
  providedIn: 'root',
})
export class RatingService {
  constructor() {}

  getRates(): Rating[] {
    return RATINGS;
  }
}
