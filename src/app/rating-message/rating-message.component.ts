import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating-message',
  templateUrl: './rating-message.component.html',
  styleUrls: ['./rating-message.component.css'],
})
export class RatingMessageComponent implements OnInit {
  @Input() public parentData = 0;

  constructor() {}

  ngOnInit(): void {}
}
